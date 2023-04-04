import { useState } from "react";

function TodoAppState() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, todo]);
    setTodo("");
  };
  return (
    <>
      <div>Todo App</div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button disabled={!todo} type="submit"> Add Todo </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoAppState;
