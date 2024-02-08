import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../Components';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginMessage, setLoginMessage] = useState('')

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch('https://moviestest-env-4.eba-t3hctzae.eu-west-2.elasticbeanstalk.com/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('accessToken', data.access_token);
        localStorage.setItem('userId', data.user_id);
        setLoginMessage("Login Successful Redirecting...");
        setTimeout(()=> {
          navigate('/');
          setLoginMessage('')}
        , 3000);
      } else {
        setLoginMessage('Incorrect Username or Password');
        setTimeout(()=>setLoginMessage(''), 2000)
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const renderPopupMessage = () => {
    if (loginMessage === "Login Successful Redirecting...") {
      return (
        <div style={{ position: 'fixed', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'green', padding: '20px', border: '1px solid black', zIndex: 1000 }}>
          {loginMessage}
        </div>
      );
    } else if(loginMessage === "Incorrect Username or Password") {
      return (
        <div style={{ position: 'fixed', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'red', padding: '20px', border: '1px solid black', zIndex: 1000 }}>
          {loginMessage}
        </div>
      )
    } else
    return null

  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
      {renderPopupMessage ()}
    </div>
  );
};

export default LoginPage;
