import React, { useState } from 'react';
import userModel from '@/models/userModel';
import { useRouter } from 'next/router';
import styles from "./styles.module.css";

const SignupPage = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      await userModel.signUp(name, email, password);
      router.push("/");
    } catch (error) {
      console.error('Signup failed:', error.response.data);
      setError(error.response.data.response || 'Failed to signup. Please try again later.');
    }
  };

  return (
    <>
    <div className={styles.signUpWrapper}>
      <div>Sign up page</div>
      {error && <div>{error}</div>}
      <div className={styles.inputsWrapper}>
      <label>
        Name:
        <input className={styles.inputText} type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Email:
        <input className={styles.inputEmail}  type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Password:
        <input className={styles.inputPassword} 
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      </div>
      <div>
      <button className={styles.signUpButton} onClick={handleSignup}>Sign Up</button>
      </div>
      </div>
    </>
  );
};

export default SignupPage;
