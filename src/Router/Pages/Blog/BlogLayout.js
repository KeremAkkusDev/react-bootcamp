import React from "react";
import { Outlet } from "react-router-dom";

function BlogLayout() {
  return (
    <>
      <h1>Blog Page</h1>
      <Outlet />
    </>
  );
}

export default BlogLayout;
