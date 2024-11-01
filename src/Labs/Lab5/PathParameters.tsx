import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div>
      <h3>Path Parameters</h3>
      <input
        defaultValue={a}
        className="form-control mb-2"
        type="number"
        onChange={(e) => setA(e.target.value)}
      />
      <input
        defaultValue={b}
        className="form-control mb-2"
        type="number"
        onChange={(e) => setB(e.target.value)}
      />
      <a
        className="btn btn-primary me-2"
        href={`${REMOTE_SERVER}/lab5/add/${a}/${b}`}
      >
        Add {a} + {b}{" "}
      </a>
      <a
        className="btn btn-danger"
        href={`${REMOTE_SERVER}/lab5/subtract/${a}/${b}`}
      >
        Substract {a} - {b}{" "}
      </a>
      <hr />
    </div>
  );
}
