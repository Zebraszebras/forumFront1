import React, { useState } from 'react';
import axios from 'axios';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8082/user/signup', { name, email, password });
      console.log('Signup successful:', response);
      
    } catch (error) {
      console.error('Signup failed:', error.response.data);
      setError(error.response.data.response || 'Failed to signup. Please try again later.');
    }
  };

  return (
    <>
      <div>Sign up page</div>
      {error && <div>{error}</div>}
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button onClick={handleSignup}>Sign Up</button>
    </>
  );
};

export default SignupPage;
