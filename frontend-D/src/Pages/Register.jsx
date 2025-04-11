import React, { useState } from "react";
import InputComponent from "../Components/InputComponent";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/accounts/register/', formData)
      .then(res => {
        console.log(res.data);
        navigate('/login')
        // maybe redirect or show success here
      })
      .catch(err => {
        console.error('Registration error:', err);
        // optionally show error to user
      });
  };

  return (
    <div className="flex items-center justify-center h-[550px] mt-5">
      <div className="bg-white p-2 rounded-lg shadow-lg max-w-sm w-full mt-2">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Register</h2>
        <form onSubmit={handleSubmit}>
          <InputComponent
            label="Full Name"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
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
          <InputComponent
            label="Phone"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />

          <button type="submit" className="w-full bg-blue-400 text-white py-3 rounded-lg hover:bg-blue-500 transition">
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
