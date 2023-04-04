import { /* useDispatch, */ useSelector } from "react-redux";
import { loginHandle, logoutHandle } from "../utils";
/* import { login, logout } from "../stores/auth"; */
function Header(/* { user, setUser } */) {
  //const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const login = (user) => {
    loginHandle(user);
  };

  const logout = () => {
    logoutHandle();
  };

  return (
    <div className="containerTodo">
      <h2>Header</h2>
      {!user && (
        <nav>
          <button onClick={() => login({ id: 1, username: "Kerem" })}>
            Login Kerem
          </button>
          <button onClick={() => login({ id: 2, username: "Ahmet" })}>
            Login Ahmet
          </button>
        </nav>
      )}
      {user && (
        <nav>
          Hoşgeldin, {user.username}
          <button onClick={logout}>Logout</button>
        </nav>
      )}
    </div>
  );
}

export default Header;
