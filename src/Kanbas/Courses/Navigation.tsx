import { Link } from "react-router-dom";
export default function CoursesNavigation() {
  return (
    <div className="wd list-group rounded-0" id="wd-courses-navigation">
      <Link
        className="list-group-item active border-0"
        to="/Kanbas/Courses/1234/Home"
      >
        Home
      </Link>

      <Link
        className="list-group-item  border-0 text-danger"
        to="/Kanbas/Courses/1234/Modules"
      >
        Modules
      </Link>

      <Link
        className="list-group-item border-0 text-danger"
        to="/Kanbas/Courses/1234/Piazza"
      >
        Piazza
      </Link>

      <Link
        className="list-group-item border-0 text-danger"
        to="/Kanbas/Courses/1234/Zoom"
      >
        Zoom
      </Link>

      <Link
        className="list-group-item border-0 text-danger"
        to="/Kanbas/Courses/1234/Assignments"
      >
        Assignments
      </Link>

      <Link
        className="list-group-item border-0 text-danger"
        to="/Kanbas/Courses/1234/Quizzes"
      >
        Quizzes
      </Link>

      <Link
        className="list-group-item border-0 text-danger"
        to="/Kanbas/Courses/1234/Grades"
      >
        Grades
      </Link>

      <Link
        className="list-group-item border-0 text-danger"
        to="/Kanbas/Courses/1234/People"
      >
        People
      </Link>
    </div>
  );
}
