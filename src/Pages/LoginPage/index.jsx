import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../Components';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch('http://localhost:4000/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('accessToken', data.access_token);
        navigate('/');
      } else {
        console.error('Login failed:', data.msg);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;