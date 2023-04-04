/* import { openModal } from "../stores/modal"; */
/* import { deleteTodo } from "../stores/todo"; */
import {  useSelector } from "react-redux";
import { deleteTodoHandle, modal } from "../utils";

function TodoItem({ todo /* setModal,  user,  setTodos, */ }) {
  const { user } = useSelector((state) => state.auth);

  const deleteHandle = () => {
    /* setTodos(todos => todos.filter(t=>t.id !== todo.id)) */
    deleteTodoHandle(todo.id);
  };
  const editHandle = () => {
    modal("edit-todo", todo);
  };
  return (
    <li>
      <span style={{ textDecoration: todo.done ? "line-through" : false }}>
        {todo.title} - {todo.user}
      </span>
      {todo.user === user.username && (
        <>
          <button onClick={editHandle}>Edit</button>
          <button onClick={deleteHandle}>Remove</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
