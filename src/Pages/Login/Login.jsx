import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const [credentials, setCredentials] = useState({
    id: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to authenticate the user
    console.log('Login Credentials:', credentials);
    // Reset form fields
    setCredentials({
      id: '',
      password: '',
    });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back!</h2>
        <p>Please log in to continue</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="id">ID </label>
            <input
              type="text"
              id="id"
              name="id"
              value={credentials.id}
              onChange={handleChange}
              placeholder="Enter your ID or email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <div className="footer">
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login