import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import { useSelector } from "react-redux";

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div>
      <h2>Account</h2>
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <AccountNavigation />
            </td>
            <td valign="top">
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
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
