import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <motion.div
      className="login-box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h1 className="login-h1">LOGIN</h1>
      <form role="form" onSubmit={handleSubmit} className="form-area">
        <input
          className="input-area"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          role="Email"
        />
        <input
          className="input-area"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          role="Password"
        />
        <motion.input
          role="submit"
          className="signup-btn"
          type="submit"
          value="LOGIN"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </form>

      <Link to="/register">
        <h3 className="login-h3">NOT A MEMBER? REGISTER HERE</h3>
      </Link>
    </motion.div>
  );
};

export default LoginForm;
