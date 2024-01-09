import React from 'react';
import { RegisterForm } from '../../Components'; 

const RegisterPage = () => {
  const handleRegisterSubmit = async (userData) => {
    try {
      const response = await fetch('http://localhost:4000/signup', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm onSubmit={handleRegisterSubmit} />
    </div>
  );
};

export default RegisterPage;