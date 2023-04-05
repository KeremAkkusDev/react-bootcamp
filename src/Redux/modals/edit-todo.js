import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../stores/todo";

export default function EditTodo({ close, data }) {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState(data.title);
  const [done, setDone] = useState(data.done);
  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(
      editTodo({
        id: data.id,
        user: data.user,
        title: todo,
        done: done,
      })
    );
    close();
  };

  return (
    <div>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <hr />
        <label>
          Completed
          <input
            type="checkbox"
            checked={done}
            onChange={(e) => {
              setDone(e.target.checked);
            }}
          />
        </label>
        <hr />
        <button type="submit">Save</button>
        <button onClick={close}>Close Modal</button>
      </form>
    </div>
  );
}
