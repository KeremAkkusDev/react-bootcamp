import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList(/* { setModal,  user, todos, setTodos, } */) {
  const { todos } = useSelector((state) => state.todo);

  return (
    <div>
      <ul>
        {todos &&
          todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} 
            /* setModal={setModal} todos={todos} setTodos={setTodos} user={user} *//>
          ))}
      </ul>
    </div>
  );
}

export default TodoList;
