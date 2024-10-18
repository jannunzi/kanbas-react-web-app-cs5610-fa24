import { Routes, Route } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import TOC from "./TOC";
import store from "./Lab4/store";
import { Provider } from "react-redux";

export default function Labs() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <h1>Jose Annunziato</h1>
        <h1>Labs</h1>
        <TOC />
        <Routes>
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2" element={<Lab2 />} />
          <Route path="Lab3/*" element={<Lab3 />} />
          <Route path="Lab4/*" element={<Lab4 />} />
        </Routes>
      </div>
    </Provider>
  );
}
