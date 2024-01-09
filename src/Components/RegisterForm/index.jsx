import React, {useState} from 'react'

const RegisterForm = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ email, password, name });
    };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  )
}

export default RegisterForm