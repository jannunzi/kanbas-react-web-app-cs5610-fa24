import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import { useSelector } from "react-redux";
import Users from "./Users";

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="d-flex">
      <AccountNavigation />
      <div className="flex-fill">
        <Routes>
          <Route
            path="/"
            element={
              <Navigate
                to={
                  currentUser
                    ? "/Kanbas/Account/Profile"
                    : "/Kanbas/Account/Signin"
                }
              />
            }
          />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Users/:uid" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}
