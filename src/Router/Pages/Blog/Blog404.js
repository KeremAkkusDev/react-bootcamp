import React from "react";
import { Link } from "react-router-dom";

function Blog404() {
  return (
    <>
      <h1>Not found blog page</h1>
      <Link to="/blog">Back to blog</Link>
    </>
  );
}

export default Blog404;
