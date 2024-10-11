import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import { TextField, Button, Checkbox, FormControlLabel, Box, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import logo from '../../assets/Images/Signup/SignUp.png';
import { auth } from '../Firebase/Firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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
    setShowFields(e.target.value.trim() !== '');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Signup successful!');
        navigate('/login');
      } catch (error) {
        console.error('Signup Error:', error.message);
        alert(error.message);
      }
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Google Sign-Up Success:', user);
      alert('Signup successful!');
      navigate('/login');
    } catch (error) {
      console.error('Google Sign-Up Error:', error.message);
      alert(error.message);
    }
  };

  return (
    <Box 
      className="signup-container" 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh" 
      width="100vw"
      sx={{ backgroundColor: '#fffde7', overflowY: 'auto', p: 2 }} 
    >
      <Box className="signup-content" 
        display="flex"
        flexWrap="wrap" 
        alignItems="center"
        justifyContent="center" 
        p={4}
        maxWidth="100%" 
        sx={{ 
          backgroundColor: '#fff', 
          borderRadius: '10px', 
          boxShadow: 3, 
          maxWidth: { xs: '90%', sm: '600px' }, 
        }}
      >
        <Box 
          className="logo-container" 
          flex={1} 
          display="flex" 
          justifyContent="center" 
          alignItems="center"
          mb={{ xs: 3, sm: 0 }} 
        >
          <img 
            src={logo} 
            alt="Logo" 
            className="logo" 
            style={{ width: '170px', height: '190px', maxWidth: '100%' }} 
          />
        </Box>
        
        <Box 
          className="form-container" 
          flex={2} 
          textAlign="left" 
          maxWidth="100%" 
          sx={{ 
            maxWidth: { xs: '100%', sm: '400px' }, 
            ml: { xs: 0, sm: 3 }, 
          }}
        >
          <Typography variant="h4" gutterBottom>
            Hi, Welcome to <span style={{ color: '#0070a9' }}>Paisa</span>
          </Typography>
          <Typography variant="body1" gutterBottom>What should we call you?</Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            error={!!errors.name}
            helperText={errors.name}
            margin="normal"
          />
          
          {showFields && (
            <>
              <Typography variant="body1" gutterBottom>Email address:</Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
                margin="normal"
              />

              <Typography variant="body1" gutterBottom>Password:</Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
                margin="normal"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                    color="primary"
                  />
                }
                label="Show Password"
              />
            </>
          )}

          <Box mt={3} textAlign="center">
            <Button 
              variant="contained" 
              onClick={handleSubmit} 
              endIcon={<span style={{ fontSize: '16px' }}>→</span>}
              sx={{
                backgroundColor: '#0070a9', 
                '&:hover': {
                  backgroundColor: '#005f8d',
                },
                width: '100%', 
              }}
            >
              Sign Up
            </Button>

            <Typography variant="body2" color="textSecondary" mt={2}>
              or
            </Typography>
            <Button 
              variant="outlined" 
              startIcon={<GoogleIcon />} 
              onClick={handleGoogleSignUp}
              sx={{ mt: 1, color: '#0070a9', borderColor: '#0070a9', '&:hover': { borderColor: '#005f8d' }, width: '100%' }}
            >
              Sign up with Google
            </Button>
          </Box>
          <Box mt={2} textAlign="center">
            <Typography variant="body2">
              By signing up, you accept the <Link to="/terms" style={{ color: '#0070a9', textDecoration: 'none' }}>Terms and conditions.</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupPage;
