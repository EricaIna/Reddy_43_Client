import React, { useState } from "react";
import "./Register.css";

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
      <form role="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          role="email"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          role="password"
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          role="username"
        />
        <input role='submit' className='signup-btn' type='submit' value='REGISTER' />
        <p role='text' className="clickable" onClick={() => goTo('/LoginPage')}>Already have an account? Click here to login!</p>
      </form>
    </div>
  );
};

export default RegisterForm;
