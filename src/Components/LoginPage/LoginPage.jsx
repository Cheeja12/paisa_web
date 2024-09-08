import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true);
      console.log('Form submitted:', { email, password });

      setTimeout(() => {
        navigate('/AddAccount'); 
      }, 2000); 
    }
  };

  return (
    <div className='login-container'>
      <div className="login-content">
        <div className="form-container">
          <h2>Log in</h2>
          {success && <p className="success-message">Logged in successfully!</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control my-3"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control my-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label>Show Password</label>
            </div>
            <button type="submit" className="btn login-btn">Log in</button>
          </form>
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot your password?</Link>
          </div>
          <div className="separator">or</div>
          <button className="btn google-btn">
            <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="Google Icon" className="google-icon-login" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
