import React, { useReducer, useState, useCallback, useMemo} from "react";
import TodoReducer from "../UseReducer/reducers/TodoReducer";
import AddTodo from "./AddTodo";
import Header from "./Header";
import Todos from "./Todos";
function Memoization() {
  console.log("APP rendered");
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(TodoReducer, {
    todos: [],
    todo: "",
    search:""
  });
  const submitHandler = useCallback( e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: state.todo,
    });
  },[state.todo]);

  const onChange = useCallback (e => {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  },[]);

  const searchHandler = e => {
    dispatch({
      type:'SET_SEARCH',
      value:e.target.value
    })
  }

  const filteredTodos = useMemo(()=>{
    return state.todos.filter(todo => todo.toLocaleLowerCase('TR').includes(state.search?.toLocaleLowerCase('TR')))
  },[state.todos, state.search]) 

  return (
    <>
      <Header />
      <h3>{count}</h3>
      <button onClick={()=>{setCount(count=>count+1)}}>+1</button>
      <hr/>
      <div>Todo App</div>
      <input type="text" placeholder="Search Todo" value={state.search} onChange={searchHandler} />
      {state.search}
      <hr/>
      <AddTodo onChange={onChange} submitHandler={submitHandler} todo={state.todo}/>
      <Todos todos={filteredTodos} />
    </>
  );
}

export default Memoization;
