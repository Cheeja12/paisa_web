// src/WelcomePage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';
import logo from '../assets/lighterlogo.png'; 

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const blobsContainer = document.querySelector('.blobs');


    const sizes = ['large', 'medium', 'medium', 'small'];
    const positions = [
      { top: '45%', left: '45%' },
      { top: '45%', left: '55%' },
      { top: '55%', left: '45%' },
      { top: '55%', left: '55%' }
    ];

    for (let i = 0; i < 4; i++) {
      const blob = document.createElement('div');
      blob.classList.add('blob', sizes[i]);
      blob.innerHTML = `
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%">
          <path id="blob" d="M381,326Q338,402,234.5,429Q131,456,67,353Q3,250,67.5,147.5Q132,45,227.5,84.5Q323,124,373.5,187Q424,250,381,326Z" fill="#a35939"></path>
        </svg>
      `;
      blob.style.top = positions[i].top;
      blob.style.left = positions[i].left;
      blob.style.transform = 'translate(-50%, -50%)';
      blob.style.animation = `move${i % 4 + 1} ${Math.random() * 10 + 5}s infinite alternate ease-in-out`;
      blobsContainer.appendChild(blob);
    }
  }, []);

  const handleGetStarted = () => {
    navigate('/home');
  };

  return (
    <div className="welcome-page">
      <div className="blobs"></div>
      <div className="content">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Welcome to Paisa</h1>
        <p>Your personal finance companion for smarter money management</p>
        <button className="get-started-button" onClick={handleGetStarted}>
          <span className="arrow">→</span> Get started
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
