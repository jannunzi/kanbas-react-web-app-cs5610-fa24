import { useState } from "react";
import { useSelector } from "react-redux";

export default function HelloRedux() {
  //   const [message, setMessage] = useState("Hello World");
  const { message } = useSelector((state: any) => state.helloReducer);

  return (
    <div id="wd-hello-redux">
      <h3>Hello Redux</h3>
      <h4>{message}</h4> <hr />
    </div>
  );
}
