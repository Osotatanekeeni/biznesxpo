import axios from "axios";
import React, { useState } from "react";
import instance from "../api/api";

function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await instance.post("api/v1/users/register", {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
      });
      console.log(response.data);
      alert("Registration successful");
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };
  return (
    <div className="w-full rounded-lg border p-4 px-8 xl:w-1/2">
      <h1 className="text-2xl font-medium">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1 py-2">
          <label>First Name</label>
          <input
            type="text"
            className="rounded-lg"
            placeholder="Your first name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 py-2">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            className="rounded-lg"
            placeholder="Your last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
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
        <div className="flex flex-col gap-1 py-2">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            className="rounded-lg"
            placeholder="Your phone number"
            value={formData.phoneNumber}
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
        <div className="flex flex-col gap-1 py-2">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            className="rounded-lg"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button
          className="w-full rounded-lg border bg-black p-2 text-white hover:border-2 hover:border-black hover:bg-white hover:text-black"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
