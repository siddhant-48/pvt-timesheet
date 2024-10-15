import React from 'react';
import { Box, Button, Container, TextField, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuthStore } from '../../store'; // Import your auth store
import { CenterFocusStrong } from '@mui/icons-material';

export const Login = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const login = useAuthStore((state) => state.login); // Get the login function from the store

  const handleLogin = () => {
    // Perform your login logic here (e.g., API call for authentication)
    
    // Assuming login is successful, update the auth state
    login(); // Set user as authenticated with 'admin' role

    // Redirect to the previous page or default to '/'
    navigate('/');
  };
  const handleRegister = () =>{
    navigate('/registration')
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 3,
          backgroundColor: "#fff",
          borderRadius: 1,
          boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom align="center">
          LOGIN
        </Typography>
        <Box component="form" sx={{ '& .MuiTextField-root': { my: 2 } }}>
          <TextField
            required
            fullWidth
            id="username"
            label="Username"
            variant="outlined"
          />
          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            variant="outlined"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, backgroundColor: '#1976d2' }}
            onClick={handleLogin} // Trigger handleLogin on click
          >
            Login
          </Button>
        </Box>
        <Typography variant="body2">
          Dont't have an account?{" "}
          <Button color="primary" onClick={handleRegister}>
            Click here to register.
          </Button>
        </Typography>
      </Box>
    </Container>
  );
};
