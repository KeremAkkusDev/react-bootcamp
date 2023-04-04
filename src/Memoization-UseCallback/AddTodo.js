import {memo} from "react";

function AddTodo({ onChange, submitHandler, todo}) {
  console.log("ADDTODO rendered");
  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={todo} onChange={onChange} />
      <button disabled={!todo} type="submit">Add Todo</button>
    </form>
  );
}

export default memo(AddTodo);
