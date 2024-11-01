import { Link, useLocation } from "react-router-dom";
export default function TOC() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <ul className="nav nav-pills">
        <li>
          <Link className="nav-link" id="wd-a" to="/Labs">
            Labs
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}
            id="wd-a1"
            to="/Labs/Lab1"
          >
            Lab 1
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}
            id="wd-a2"
            to="/Labs/Lab2"
          >
            Lab 2
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}
            id="wd-a3"
            to="/Labs/Lab3"
          >
            Lab 3
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}
            id="wd-a4"
            to="/Labs/Lab4"
          >
            Lab 4
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}
            id="wd-a5"
            to="/Labs/Lab5"
          >
            Lab 5
          </Link>
        </li>
        <li>
          <Link className="nav-link" id="wd-k" to="/Kanbas">
            Kanbas
          </Link>
        </li>
      </ul>
    </>
  );
}
