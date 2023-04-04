import { get } from "./Request";

export const getUsers = () =>
  get("https://jsonplaceholder.typicode.com/users");
