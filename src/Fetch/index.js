import { useEffect, useState } from "react";

function Fetch() {
  const [users, setUsers] = useState();
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState();

  const addPost = (data) => {
    const headers = new Headers();
    // headers.append('Content-type', 'application/json')
    headers.append("Authorization", "Bearer kerem1234abcd");

    const formData = new FormData();
    formData.append("userId", data.userId);
    formData.append("title", data.title);
    formData.append("body", data.body);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      //body: JSON.stringify(data),
      formData,
      headers,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  addPost({
    userId: 1,
    title: "Example Post",
    body: "Post Content",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("avatar", avatar);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" name="name" value={name} 
        onChange={(e) => {setName(e.target.value);}}/><br />

        <input type="file" name="avatar" 
        onChange={(e) => {setAvatar(e.target.files[0]);}}/><br />

        <button type="submit" disabled={!name || !avatar}>Save</button>
      </form>

      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
}

export default Fetch;
