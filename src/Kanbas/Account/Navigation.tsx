import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div
      id="wd-account-navigation"
      className="wd list-group rounded-0 border-0"
    >
      <Link
        className="list-group-item active border-0"
        to={`/Kanbas/Account/Signin`}
      >
        Signin
      </Link>
      <Link
        className="list-group-item border-0 text-danger"
        to={`/Kanbas/Account/Signup`}
      >
        Signup
      </Link>
      <Link
        className="list-group-item border-0  text-danger"
        to={`/Kanbas/Account/Profile`}
      >
        Profile
      </Link>
    </div>
  );
}
