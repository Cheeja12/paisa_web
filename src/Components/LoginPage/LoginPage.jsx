import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button, Checkbox, FormControlLabel, Container, Typography, Box, Divider } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

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
    <Container
      maxWidth={false}
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #FF7E3D, #FF9F81)',
      }}
    >
      <Box
        sx={{
          padding: 4,
          background: 'linear-gradient(135deg, #FF9E2C 10%, #FF6600 90%)',
          borderRadius: 2,
          boxShadow: 3,
          textAlign: 'center',
          width: '100%',
          maxWidth: 400, 
        }}
      >
        <Typography variant="h4" gutterBottom color="#fbe2d8">
          Log in
        </Typography>
        {success && (
          <Typography variant="body2" sx={{ color: 'green', mb: 2 }}>
            Logged in successfully!
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            label="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
            sx={{ mb: 2, backgroundColor: 'white' }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
            sx={{ mb: 2, backgroundColor: 'white' }}
          />
          <FormControlLabel
            control={<Checkbox checked={showPassword} onChange={() => setShowPassword(!showPassword)} />}
            label="Show Password"
            sx={{ color: '#fbe2d8' }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, backgroundColor: '#c44b24' }}
          >
            Log in
          </Button>
        </form>
        <Typography sx={{ mt: 2, mb: 2 }}>
          <Link to="/forgot-password" style={{ color: '#fbe2d8' }}>
            Forgot your password?
          </Link>
        </Typography>
        <Divider sx={{ color: '#fbe2d8', mb: 2 }}>or</Divider>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{ mb: 2, color: '#757575', borderColor: '#ddd', backgroundColor: '#fff' }}
        >
          Sign in with Google
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
