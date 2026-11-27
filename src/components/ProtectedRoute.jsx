import React from "react";

import { Outlet, Navigate, useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  let token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={"/auth"} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
