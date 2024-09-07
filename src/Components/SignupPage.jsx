import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import './SignupPage.css';
import logo from '../assets/SignUp.png';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showFields, setShowFields] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  
  const navigate = useNavigate(); 

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value.trim() !== '') {
      setShowFields(true);
    } else {
      setShowFields(false);
    }
  };

  const validate = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
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
      alert('Signup successful!');
      navigate('/login');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="form-container">
          <h2>Hi, Welcome to <span>Paisa</span></h2>
          <p>What should we call you?</p>
          <input
            type="text"
            className="form-control my-3"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <div className={showFields ? 'visible' : 'hidden'}>
            <p>Email address:</p>
            <input
              type="email"
              className="form-control my-3"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <p>Password:</p>
            <input
              type={showPassword ? "text" : "password"} 
              className="form-control my-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
            <div className="show-password-container">
              <input
                type="checkbox"
                id="show-password"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label htmlFor="show-password">Show Password</label>
            </div>
          </div>
          <div className="button-container">
            <button className="btn signup-btn" onClick={handleSubmit}>Next<span className="arrow">→</span> </button>
            <span className="or-text">or</span>
            <button className="btn google-btn">
              <img
                src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                alt="Google Icon"
                className="google-icon"
              />
              Sign up with Google
            </button>
          </div>
          <div className="terms">
            <p>
              By signing up, you accept the <Link to="/terms">Terms and conditions.</Link> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
