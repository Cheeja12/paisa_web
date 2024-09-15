import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import { TextField, Button, Checkbox, FormControlLabel, Box, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import logo from '../../assets/Images/Signup/SignUp.png';

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
    <Box 
      className="signup-container" 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh" 
      width="100vw"
      sx={{ background: 'linear-gradient(180deg, #FF7E3D, #FF9F81)', overflowY: 'auto' }}
    >
      <Box className="signup-content" 
        display="flex"
        alignItems="center"
        p={4}
        maxWidth={600}
        sx={{ background: 'linear-gradient(135deg, #FF9E2C 10%, #FF6600 90%)', borderRadius: '10px', boxShadow: 3 }}
      >
        <Box className="logo-container" flex={1} display="flex" justifyContent="center" alignItems="center">
          <img src={logo} alt="Logo" className="logo" style={{ width: '100px', height: '90px' }} />
        </Box>
        <Box className="form-container" flex={2} textAlign="left" maxWidth={400}>
          <Typography variant="h4" gutterBottom>
            Hi, Welcome to <span style={{ color: '#ae330a' }}>Paisa</span>
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
          backgroundColor: '#c44b24', 
           '&:hover': {
           backgroundColor: '#ae330a', 
    }
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
              sx={{ mt: 1 }}
            >
              Sign up with Google
            </Button>
          </Box>
          <Box mt={2} textAlign="center">
            <Typography variant="body2">
              By signing up, you accept the <Link to="/terms" style={{ color: '#007bff', textDecoration: 'none' }}>Terms and conditions.</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupPage;
