import { Link } from "react-router-dom";
export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation">
      <Link to="/Kanbas/Courses/1234/Home">Home</Link>
      <br />
      <Link to="/Kanbas/Courses/1234/Modules">Modules</Link>
      <br />
      <Link to="/Kanbas/Courses/1234/Piazza">Piazza</Link>
      <br />
      <Link to="/Kanbas/Courses/1234/Zoom">Zoom</Link>
      <br />
      <Link to="/Kanbas/Courses/1234/Assignments">Assignments</Link>
      <br />
      <Link to="/Kanbas/Courses/1234/Quizzes">Quizzes</Link>
      <br />
      <Link to="/Kanbas/Courses/1234/Grades">Grades</Link>
      <br />
      <Link to="/Kanbas/Courses/1234/People">People</Link>
      <br />
    </div>
  );
}
