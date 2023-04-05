import { useReducer } from "react";
import TodoReducer from "./reducers/TodoReducer";
function UseReducer() {
  const [state, dispatch] = useReducer(TodoReducer, {
    todos: [],
    todo: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: state.todo,
    });
  };

  const onChange = (e) => {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  };
  return (
    <>
      <div>Todo App</div>
      <form onSubmit={submitHandler}>
        <input type="text" value={state.todo} onChange={onChange} />
        <button disabled={!state.todo} type="submit"> Add Todo </button>
      </form>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default UseReducer;
