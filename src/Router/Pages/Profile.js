import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const logoutHandle = () => {
    setUser(false);
    navigate("/");
  };

  return (
    <>
      <div>Profile page</div>
      <button onClick={logoutHandle}>Logout</button>
    </>
  );
}

export default Profile;
