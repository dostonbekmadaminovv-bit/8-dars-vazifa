import React from "react";
import LoginPage from "../pages/auth/LoginPage";
import { Outlet } from "react-router-dom";
function AuthLayout() {
  return (
    <div>
      Auth layout{" "}
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
