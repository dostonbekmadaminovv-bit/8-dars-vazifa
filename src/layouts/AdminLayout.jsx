import React from "react";
import { Outlet } from "react-router-dom";

function Adminlayout() {
  return (
    <div>
      <h1>admin</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Adminlayout;
