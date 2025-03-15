import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { state: userState } = useContext(UserContext);
  const token = localStorage.getItem("token");

  if (!token || !userState.token) {
    return <Navigate to="/auth" />;
  }

  return children;
};

export default PrivateRoute;
