import { post, get, postJSON } from "./Request";

export const getPosts = () =>
  get("https://jsonplaceholder.typicode.com/posts");

export const getPostsDetail = (id) =>
  get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const newPost = (data) =>
  post("https://jsonplaceholder.typicode.com/posts", data);

export const newPostJSON = (data) =>
  postJSON("https://jsonplaceholder.typicode.com/posts", data);
