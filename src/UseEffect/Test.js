import React, { useEffect, useState } from "react";

function Test() {
  const [post, setPost] = useState(false);
  const [postId, setPostId] = useState(1);


  useEffect(() => {
    console.log("component first load");
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    .then ((res)=> res.json())
    .then((data)=> console.log(data))
    let interval = setInterval(()=> console.log("interval started"),1000)
    return () => {
      console.log("component is destroy");
      clearInterval(interval)
    };
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
    console.log("changed postId", postId);
  }, [postId]);

  useEffect(() => {
    console.log("component is render");
  });

  return (
    <div>
        <div className="Todo">
        </div>
    <div className="Post">
      <h3>{postId}</h3>
      {post && JSON.stringify(post)}
      <button onClick={() => {setPostId((postId) => postId + 1);}}>Next Post</button>
    </div>
    </div>
  );
}

export default Test;
