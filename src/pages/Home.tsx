import React, { useContext } from "react";
import BusinessCard from "../components/BusinessCard";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Chart from "../components/Chart";

function Home() {
  const { state: userState, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch({ type: "LOGOUT" });
    navigate("/auth");
  };
  return (
    <div className="p-2">
      <div className="flex justify-end">
        <button
          className="rounded-lg border-2 border-black p-2"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <BusinessCard />
      <Chart />
    </div>
  );
}

export default Home;
