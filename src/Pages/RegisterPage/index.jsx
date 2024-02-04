import React, { useState } from "react";
import { RegisterForm } from "../../Components";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [registerMessage, setRegisterMessage] = useState('')

  const handleRegisterSubmit = async (userData) => {
    try {
      const response = await fetch("http://moviestest-env-4.eba-t3hctzae.eu-west-2.elasticbeanstalk.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      setRegisterMessage('Registration Succesful! Redirecting to Login')
      setTimeout(()=>{setRegisterMessage('');
      navigate("/login")}
      ,3000)
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const renderPopupMessage = () => {
    if (registerMessage) {
      return (
        <div style={{ position: 'fixed', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'green', padding: '20px', border: '1px solid black', zIndex: 1000 }}>
          {registerMessage}
        </div>
      )} else {
        return null
      }}


  return (
    <div>
      <RegisterForm onSubmit={handleRegisterSubmit} />
      {renderPopupMessage}
    </div>
  );
};

export default RegisterPage;
