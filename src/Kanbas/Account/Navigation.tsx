import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();

  return (
    <div
      id="wd-account-navigation"
      className="wd list-group border-0 rounded-0"
    >
      {links.map((link: string) => (
        <Link
          to={`/Kanbas/Account/${link}`}
          className={`list-group-item text-danger border border-0 ${
            pathname.includes(link) ? "active" : ""
          }`}
        >
          {" "}
          {link}{" "}
        </Link>
      ))}
      {/* <Link to={`/Kanbas/Account/Signin`}> Signin </Link> <br />
      <Link to={`/Kanbas/Account/Signup`}> Signup </Link> <br />
      <Link to={`/Kanbas/Account/Profile`}> Profile </Link> <br /> */}
    </div>
  );
}
