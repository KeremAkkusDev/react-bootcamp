import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <h1>Auth Layout</h1>
      <Outlet />
    </>
  );
}

export default AuthLayout;
