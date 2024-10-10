import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline, IoSpeedometerOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaCalendar, FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";

export default function KanbasNavigation() {
  const { pathname } = useLocation();

  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <div
      className="border-0 bottom-0 top-0 position-fixed d-none d-md-block list-group rounded-0 bg-black"
      id="wd-kanbas-navigation"
      style={{ width: 120 }}
    >
      <a
        className="border-0 text-center bg-black text-white list-group-item"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
      >
        Northeastern
      </a>
      <Link
        to="/Kanbas/Account"
        className={`list-group-item text-center border-0 bg-black
            ${
              pathname.includes("Account")
                ? "bg-white text-danger"
                : "bg-black text-white"
            }`}
      >
        <FaRegCircleUser
          className={`fs-1 ${
            pathname.includes("Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account
      </Link>
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.path}
          className={`list-group-item bg-black text-center border-0
              ${
                pathname.includes(link.label)
                  ? "text-danger bg-white"
                  : "text-white bg-black"
              }`}
        >
          {link.icon({ className: "fs-1 text-danger" })}
          <br />
          {link.label}
        </Link>
      ))}
    </div>
  );
}
