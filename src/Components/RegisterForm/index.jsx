import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RegisterForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, name });
  };

  return (
    <motion.div
      className="register-box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
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
        <motion.input
          role="submit"
          className="signup-btn"
          type="submit"
          value="REGISTER"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </form>
      <Link to="/login">
        <h3>Already have an account? Click here to login!</h3>
      </Link>
    </motion.div>
  );
};

export default RegisterForm;
