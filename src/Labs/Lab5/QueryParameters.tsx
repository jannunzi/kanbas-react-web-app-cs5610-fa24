import { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input
        className="form-control mb-2"
        defaultValue={a}
        type="number"
        onChange={(e) => setA(e.target.value)}
      />
      <input
        className="form-control mb-2"
        defaultValue={b}
        type="number"
        onChange={(e) => setB(e.target.value)}
      />
      <a href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
        Add {a} + {b}{" "}
      </a>
      <a
        href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
      >
        Substract {a} - {b}{" "}
      </a>
      <hr />
    </div>
  );
}
