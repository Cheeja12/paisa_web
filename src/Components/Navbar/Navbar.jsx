import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import logo from '../../assets/Images/Navbar/NavLogo.png';
import { styled } from '@mui/material/styles';

const LogoImg = styled('img')({
  height: '150px', 
  width: '450px',  
  marginLeft: '-120px',  
});

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', borderBottom: '1px solid #ddd', width: '100%' }}>
      <Toolbar sx={{ justifyContent: 'space-between', height: '80px', pr: '700px' }}>
        <Box display="flex" alignItems="center" className="logo">
          <LogoImg src={logo} alt="Logo" className="logo-img" />
          <Typography
            variant="h6"
            component="span"
            sx={{ fontWeight: 'bold', color: '#bf360c', fontSize: '30px', ml: '-170px' }} 
          >
            Paisa
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" className="actions">
          <Button
            component={Link}
            to="/login"
            sx={{
              marginRight: '20px',
              textDecoration: 'none',
              color: '#bf360c',
              fontSize: '20px',
            }}
          >
            Log in
          </Button>
          <Button
            component={Link}
            to="/signup"
            variant="contained"
            sx={{
              backgroundColor: '#bf360c',
              padding: '10px 20px',
              marginRight: '70px',
              borderRadius: '5px',
              color: 'white',
              fontSize: '20px',
              '&:hover': {
                backgroundColor: 'rgb(112, 70, 70)',
              },
            }}
          >
            Sign up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
