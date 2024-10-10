import { Link, useParams } from "react-router-dom";
export default function CoursesNavigation() {
  const { cid } = useParams();
  return (
    <div className="wd list-group rounded-0" id="wd-courses-navigation">
      <Link
        className="list-group-item active border-0"
        to={`/Kanbas/Courses/${cid}/Home`}
      >
        Home
      </Link>

      <Link
        className="list-group-item  border-0 text-danger"
        to={`/Kanbas/Courses/${cid}/Modules`}
      >
        Modules
      </Link>

      <Link
        className="list-group-item border-0 text-danger"
        to={`/Kanbas/Courses/${cid}/Piazza`}
      >
        Piazza
      </Link>

      <Link
        className="list-group-item border-0 text-danger"
        to={`/Kanbas/Courses/${cid}/Zoom`}
      >
        Zoom
      </Link>

      <Link
        className="list-group-item border-0 text-danger"
        to={`/Kanbas/Courses/${cid}/Assignments`}
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
        to={`/Kanbas/Courses/${cid}/People`}
      >
        People
      </Link>
    </div>
  );
}
