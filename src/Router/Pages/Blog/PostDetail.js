import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../../utils";

function PostDetail() {
  const { postUrl, postId } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h2>
        PostDetail Page {postUrl} - {postId}
      </h2>
      <button onClick={() => navigate(url("home.blog"))}>
        Back to post page
      </button>
    </>
  );
}

export default PostDetail;
