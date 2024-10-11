import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import logo from '../../assets/Images/WelcomPage/WelcomePage.png';
import './WelcomePage.css';

const BlobsContainer = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 0,
});

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const blobsContainer = document.querySelector('.blobs');
    const sizes = ['large', 'medium', 'medium', 'small'];
    const positions = [
      { top: '45%', left: '45%' },
      { top: '45%', left: '55%' },
      { top: '55%', left: '45%' },
      { top: '55%', left: '55%' },
    ];

    for (let i = 0; i < 4; i++) {
      const blob = document.createElement('div');
      blob.classList.add('blob', sizes[i]);
      blob.innerHTML = `
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%">
          <path d="M381,326Q338,402,234.5,429Q131,456,67,353Q3,250,67.5,147.5Q132,45,227.5,84.5Q323,124,373.5,187Q424,250,381,326Z" fill="#0070a9"></path>
        </svg>
      `;
      blob.style.top = positions[i].top;
      blob.style.left = positions[i].left;
      blob.style.animation = `move${i % 4 + 1} ${Math.random() * 10 + 5}s infinite alternate ease-in-out`;
      blobsContainer.appendChild(blob);
    }
  }, []);

  const handleGetStarted = () => {
    navigate('/home');
  };

  return (
    <Box
      className="welcome-page"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        position: 'relative',
        background: '#fffde7', 
        textAlign: 'center',
      }}
    >
      <BlobsContainer className="blobs" />
      <Box className="content" sx={{ zIndex: 1 }}>
        <img src={logo} alt="Logo" style={{ width: '600px', height: '200px' }} />
        <Typography variant="h1" sx={{ color:  '#001540 !important', fontSize: { xs: '1.5rem', sm: '2.5rem' } }}>
  Welcome to Paisa
</Typography>
        <Typography variant="body1" sx={{ color: '#001540 !important' }}>
          Your personal finance companion for smarter money management
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: '#0070a9', 
            color: '#fffde7',
            padding: '15px 30px',
            borderRadius: '25px',
            '&:hover': {
              backgroundColor: '#0070a9',
              color: 'black',
            },
            display: 'inline-flex',
            alignItems: 'center',
          }}
          onClick={handleGetStarted}
        >
          <span style={{ marginRight: '10px', fontSize: '18px' }}>→</span>
          Get started
        </Button>
      </Box>
    </Box>
  );
};

export default WelcomePage;
