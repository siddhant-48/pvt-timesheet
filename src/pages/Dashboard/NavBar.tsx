import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  MenuItem,
  Menu,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ExitToApp as ExitToAppIcon,
  AccessTime as AccessTimeIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import image from "../../images/Nitor_white_logo.png";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ background: "#3d3e3e", padding: "10px 0" }}>
      <Toolbar>
        {/* Company Logo */}
        <Avatar
          alt="Company Logo"
          src={image}
          sx={{ width: 120, height: 50, marginRight: 2, borderRadius: 0 }}
        />

        {/* My Leaves Button */}
        <MenuItem>
          <Button color="inherit" sx={{ marginRight: 2 }}>
            <Link
              to="/my-leaves"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Timesheet
            </Link>
          </Button>
        </MenuItem>
        <MenuItem>
          <Button color="inherit" sx={{ marginRight: 2 }}>
            <Link
              to="/my-leaves"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              My Leaves
            </Link>
          </Button>
        </MenuItem>

        {/* Spacer */}
        <div style={{ flexGrow: 1 }}></div>

        {/* Attendance Icon and Info */}
        <MenuItem>
          <IconButton color="inherit">
            <AccessTimeIcon />
          </IconButton>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "white", marginRight: 2 }}
          >
            Attendance
          </Typography>
          <Button color="inherit" sx={{}}>
            <Link
              to="/clock-in"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Clock-in
            </Link>
          </Button>
        </MenuItem>

        {/* User Info */}
        <MenuItem>
          <IconButton color="inherit">
            <PersonIcon />
          </IconButton>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "white", marginRight: 2 }}
          >
            Logged in as: Siddhant Patki
          </Typography>
        </MenuItem>

        {/* Sign Out */}
        <MenuItem>
          <IconButton color="inherit">
            <ExitToAppIcon />
          </IconButton>
          <Button color="inherit" sx={{}}>
            <Link
              to="/sign-out"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Sign Out
            </Link>
          </Button>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
