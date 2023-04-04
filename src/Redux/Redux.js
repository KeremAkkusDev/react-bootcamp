import { useState } from "react";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Modal from "./Modal";
import { useSelector } from "react-redux";

function Redux() {
  const { user } = useSelector((state) => state.auth);
  const { open: isModalOpen } = useSelector((state) => state.modal);
  //const [todos, setTodos] = useState([]);
  //const [user, setUser] = useState(false);
  //const [language, setLanguage] = useState("tr");
  //const [modal, setModal] = useState(false);
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`${theme} todoapp`}>
      {isModalOpen && (
        <Modal /* setModal={setModal} name={modal.name} data={modal.data} */ />
      )}
      <button onClick={changeTheme}>Change Theme</button>
      <Header /* user={user} setUser={setUser} */ />
      {user && (
        <>
          <AddTodo /* setTodos={setTodos} user={user} */ />
        </>
      )}
      <TodoList /* todos={todos} setTodos={setTodos} user={user}  setModal={setModal}*/
      />
    </div>
  );
}

export default Redux;
