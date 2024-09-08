import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/Navbar/NavLogo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="logo-text">Paisa</span>
      </div>
      <div className="actions">
        <Link to="/login" className="login">Log in</Link>
        <Link to="/signup" className="signup">Sign up</Link>
      </div>
    </div>
  );
}

export default Navbar;
