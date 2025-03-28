import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../CSS/Login.css'

const BASE_URL = "https://reqres.in/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !password) {
      setError("Both email and password are required.");
      return false;
    }
    if (!email.includes("@")) {
      setError("Invalid email format.");
      return false;
    }
    return true;
  };

  const login = async () => {
    if (!validateForm()) return;
    
    try {
      const response = await axios.post(`${BASE_URL}/login`, { email, password });
      localStorage.setItem("token", response.data.token);
      navigate("/users");
    } catch (error) {
      setError("Invalid login credentials. Please try again.");
    }
  };

  return (
    <div >
      <h1 className="login">Welcome Back</h1>
      <div className="login-container">
      <h1 >Login</h1>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter email"
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Enter password"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={login}>Login</button>
      </div>
    </div>
  );
};

export default Login;