import React, { useState } from "react";
import InputComponent from "../Components/InputComponent";
import ButtonComponent from "../Components/ButtonComponent";
import { Link } from "react-router-dom";


const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="flex items-center justify-center h-[500px] mt-4 ">
      <div className="bg-white p-2 rounded-lg shadow-lg max-w-sm w-full mt-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Login</h2>
        <form onSubmit={handleSubmit}>
          <InputComponent
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <InputComponent
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <ButtonComponent type='submit' className="w-full bg-blue-400 text-white py-3 rounded-lg hover:bg-blue-500 transition">Login</ButtonComponent>

             </form>
             <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
