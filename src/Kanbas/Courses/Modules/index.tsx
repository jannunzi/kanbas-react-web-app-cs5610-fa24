import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Introduction to the course{" "}
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Learn what is Web Development{" "}
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              {" "}
              <BsGripVertical className="me-2 fs-3" />
              LESSON 1{" "}
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              {" "}
              <BsGripVertical className="me-2 fs-3" />
              LESSON 2{" "}
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              LEARNING OBJECTIVES{" "}
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
          </ul>
        </li>
      </ul>{" "}
    </div>
  );
}
