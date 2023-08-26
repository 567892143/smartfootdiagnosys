import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //     // Handle successful login (e.g., redirect)
  //   } catch (error) {
  //     console.error('Login error:', error);
  //   }
   };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       <Link to="/pla"> <button type="submit">Login</button></Link>
      </form>
    </div>
  );
}

export default Login;
