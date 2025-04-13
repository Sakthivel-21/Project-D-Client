import React, { useState } from "react";
import axios from "axios";
import InputComponent from "../Components/InputComponent";
import ButtonComponent from "../Components/ButtonComponent";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    axios.post('http://localhost:8000/accounts/login/', formData)
      .then(res => {
        console.log(res.data);
        // Store token in localStorage if your API returns one
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
        }
        navigate('/');
      })
      .catch(err => {
        console.error('Login error:', err);
        setError(
          err.response?.data?.message || 
          "Login failed. Please check your credentials and try again."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-[500px]  px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Login</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <InputComponent
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          
          <InputComponent
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
          
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
          
          <ButtonComponent 
            type="submit" 
            className="w-full bg-blue-400 text-white py-3 rounded-lg hover:bg-blue-500 transition"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </ButtonComponent>
        </form>
        
        <p className="text-center text-gray-600 mt-6">
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