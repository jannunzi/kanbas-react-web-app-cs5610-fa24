import { Link } from "react-router-dom";
export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to="/Kanbas/Courses/1234/Home"
        className="list-group-item active border border-0"
      >
        Home
      </Link>
      <Link
        className="list-group-item text-danger border border-0"
        to="/Kanbas/Courses/1234/Modules"
      >
        Modules
      </Link>
      <Link
        className="list-group-item text-danger border border-0"
        to="/Kanbas/Courses/1234/Piazza"
      >
        Piazza
      </Link>
      <Link
        className="list-group-item text-danger border border-0"
        to="/Kanbas/Courses/1234/Zoom"
      >
        Zoom
      </Link>
      <Link
        className="list-group-item text-danger border border-0"
        to="/Kanbas/Courses/1234/Assignments"
      >
        Assignments
      </Link>
      <Link
        className="list-group-item text-danger border border-0"
        to="/Kanbas/Courses/1234/Quizzes"
      >
        Quizzes
      </Link>
      <Link
        className="list-group-item text-danger border border-0"
        to="/Kanbas/Courses/1234/Grades"
      >
        Grades
      </Link>
      <Link
        className="list-group-item text-danger border border-0"
        to="/Kanbas/Courses/1234/People"
      >
        People
      </Link>
    </div>
  );
}
