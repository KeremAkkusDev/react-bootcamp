import { useEffect } from "react";
import { getPosts, getPostsDetail, newPost, newPostJSON  } from "./services/Post";
import { getUsers } from "./services/User";

function ServiceFetch() {
  useEffect(() => {
    getPosts().then((res) => console.log(res));
    getPostsDetail(2).then((res)=>console.log(res));
    newPost({
        userId:3,
        title:'test',
        body:'test',
    }).then((res)=>console.log(res))
    newPostJSON({
        userId:3,
        title:'test',
        body:'test',
    }).then((res)=>console.log(res))
    getUsers()
  });

  return <div>ServiceFetch</div>;
}

export default ServiceFetch;
