import React, { useState } from "react";
import "./Login.css";
import RegisterForm from "../RegisterForm";
import { Link } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="login-box">
      <h1>LOGIN</h1>
      <form role="form" onSubmit={handleSubmit} className="form-area">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          role="Email"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          role="Password"
        />
        <input role='submit' className='signup-btn' type='submit' value='LOGIN' />
      </form>

      <Link to="/register">
        <h3>NOT A MEMBER? REGISTER HERE</h3>
      </Link>
    </div>
  );
};

export default LoginForm;
