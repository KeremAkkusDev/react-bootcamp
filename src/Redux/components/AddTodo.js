import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
/* import { addTodo } from '../stores/todo'; */
import { /* useDispatch, */ useSelector } from "react-redux";
import { addTodoHandle } from "../utils";

function AddTodo(/* {user,setTodos} */) {
  const { user } = useSelector((state) => state.auth);
  //const dispatch = useDispatch()
  const [todo, setTodo] = useState();
  const submitHandle = (e) => {
    e.preventDefault();
    /* setTodos(prev=>([...prev,{title:todo, done:false, id:nanoid(), user:user.username}])) */
    addTodoHandle({
      title: todo,
      done: false,
      id: nanoid(),
      user: user.username,
    });
    setTodo("");
  };
  return (
    <>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={todo}
          placeholder="Add Todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" disabled={!todo || todo.length < 4}>
          Add Todo
        </button>
      </form>
    </>
  );
}

export default AddTodo;
