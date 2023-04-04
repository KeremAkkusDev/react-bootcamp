import { useContext, createContext, useReducer } from "react";
import siteReducer from "../reducers/siteReducer";
const SiteContext = createContext();

export function SiteProvider({ children }) {
  const [state, dispatch] = useReducer(siteReducer, {
    theme: localStorage.getItem("theme") || "light",
    language: localStorage.getItem("language") || "TR",
  });

  const values = {
    ...state,
    dispatch,
  };

  return <SiteContext.Provider value={values}>{children}</SiteContext.Provider>;
}

export const useSiteContext = () => useContext(SiteContext);

export default SiteContext;
