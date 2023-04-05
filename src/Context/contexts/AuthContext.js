import { useContext, createContext, useReducer } from "react";
import authReducer from "../reducers/authReducer";
const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [state, dispatch] = useReducer(authReducer, {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : false,
  });
  const values = {
    ...state,
    dispatch,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
  
}

export const useAuthContext = () => useContext(AuthContext);

export default AuthContext;
