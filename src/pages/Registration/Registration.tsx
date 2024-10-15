import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

export const Registration = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <Container maxWidth="sm">
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
        <Typography component="h1" variant="h5" sx={{ marginBottom: 3 }}>
          REGISTER
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="emp-id"
          label="Emp id"
          name="emp-id"
          autoComplete="emp-id"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="first-name"
          label="First Name"
          name="first-name"
          autoComplete="first-name"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="last-name"
          label="Last Name"
          name="last-name"
          autoComplete="last-name"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            id="gender"
            label="Gender"
            defaultValue=""
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleClick}
        >
          Register
        </Button>
        <Typography variant="body2">
          Already have an account?{" "}
          <Button color="primary" onClick={handleLogin}>
            Click here to log in.
          </Button>
        </Typography>
      </Box>
    </Container>
  );
};
