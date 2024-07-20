import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      // Simulate authentication
      localStorage.setItem('auth', 'true'); // Set auth flag in localStorage
      navigate('/'); // Redirect to home page
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div className="sign">
      <div className="SignUp">
        <h2>Sign Up</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <footer className="footer">
        <p>
          &copy; 2024 Take My Trip. All rights reserved. Contact: 1234-5678-9000. 
          Discover Your Perfect Flight. Elevate Your Journey with Comfort and Convenience. 
          <a href="mailto:info@takemetrip.com"> info@takemetrip.com</a>
        </p>
      </footer>
    </div>
  );
}

export default SignUp;
