import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const RegisterForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, name });
  };

  return (
    <div className="register-box">
      <h1>REGISTER</h1>
      <form role="form" onSubmit={handleSubmit} className="form-area">
        <input
          className="input-area"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          role="email"
        />
        <input
          className="input-area"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          role="password"
        />
        <input
          className="input-area"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          role="username"
        />
        <input
          role="submit"
          className="signup-btn"
          type="submit"
          value="REGISTER"
        />
      </form>
      <Link to="/login">
        <h3>Already have an account? Click here to login!</h3>
      </Link>
    </div>
  );
};

export default RegisterForm;
