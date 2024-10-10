import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function PeopleTable() {
  const { cid } = useParams();
  const { users, enrollments } = db;

  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((usr) =>
              enrollments.some(
                (enrollment) =>
                  enrollment.user === usr._id && enrollment.course === cid
              )
            )
            .map((user) => (
              <tr>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id">001234561S</td>
                <td className="wd-section">S101</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">2020-10-01</td>
                <td className="wd-total-activity">10:21:32</td>{" "}
              </tr>
            ))}
          {/* Add at least 3 more users such as Bruce Wayne, Steve Rogers, and Natasha Romanoff */}
        </tbody>
      </table>
    </div>
  );
}
