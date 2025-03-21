import React, { useContext, useState } from "react";
import instance from "../api/api";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { Loader } from "./Loader";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    try {
      const response = await instance.post("/login", {
        email: formData.email,
        password: formData.password,
      });

      alert("Login successful");
      const { email, token, userId } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      dispatch({ type: "SET_USER", payload: { email, token, userId } });
      navigate("/home");
    } catch (error) {
      console.error(error);
      setIsLoggingIn(false);
      alert("Login failed");
    }
  };
  return (
    <div className="w-full rounded-lg border p-4 px-8 xl:w-1/2">
      <h1 className="text-2xl font-medium">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1 py-2">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className="rounded-lg"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1  py-2">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            className="rounded-lg"
            placeholder="Your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button
          className="w-full rounded-lg border bg-black p-2 text-white hover:border-2 hover:border-black hover:bg-white hover:text-black"
          type="submit"
        >
          {isLoggingIn ? <Loader size="sm" /> : "Login"}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
