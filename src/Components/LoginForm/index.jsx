import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSucessMessage] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <form type="submit">
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
      </form>
    </>
  );
};

export default LoginForm;
