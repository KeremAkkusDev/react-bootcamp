import { useAuthContext } from "../contexts/AuthContext";
import SwitchLanguage from "../changers/SwitchLanguage";
import SwitchTheme from "../changers/SwitchTheme";

function Header() {
  
  const { user, dispatch } = useAuthContext();

  const login = () => {
    dispatch({
      type: "LOGIN",
      payload: {
        name: "Kerem",
        desc: "Admin",
      },
    });
  };
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <header>
      <h1>HEADER</h1>
      {user ? (
        <button onClick={logout}>{user.name} Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
      <SwitchTheme />
      <SwitchLanguage />
    </header>
  );
}

export default Header;
