import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useAuth();
  const loginHandle = () => {
    setUser({
      id: 1,
      username: "Kerem",
    });
    navigate(location?.state?.return_url || "/");
  };
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="login description" />
      </Helmet>
      <h1>Please Login</h1>
      <button onClick={loginHandle}>Login</button>
    </>
  );
}

export default Login;
