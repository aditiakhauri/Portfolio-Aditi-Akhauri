import React, { useState } from "react";
import { AppBar, Toolbar, Button, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        backgroundColor: "#1a1a1a",
        padding: "10px 20px",
        zIndex: 1100,
        boxShadow: 0,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Navigation Links for larger screens */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" }, // Hide on small screens
            gap: 3,
            ml: "auto", // Align menu items to the right
          }}
        >
          {/* Home */}
          <ScrollLink to="hero" smooth={true} duration={800}>
            <Button
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "bold",
                "&:hover": {
                  color: "#FFD700",
                },
              }}
            >
              Home
            </Button>
          </ScrollLink>

          {/* Experience (Points to "work") */}
          <ScrollLink to="work" smooth={true} duration={800}>
            <Button
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "bold",
                "&:hover": {
                  color: "#FFD700",
                },
              }}
            >
              Experience
            </Button>
          </ScrollLink>

          {/* Projects */}
          <ScrollLink to="projects" smooth={true} duration={800}>
            <Button
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "bold",
                "&:hover": {
                  color: "#FFD700",
                },
              }}
            >
              Projects
            </Button>
          </ScrollLink>

          {/* Tools */}
          <ScrollLink to="tools" smooth={true} duration={800}>
            <Button
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "bold",
                "&:hover": {
                  color: "#FFD700",
                },
              }}
            >
              Tools
            </Button>
          </ScrollLink>

          {/* Contact */}
          <ScrollLink to="contact" smooth={true} duration={800}>
            <Button
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "bold",
                "&:hover": {
                  color: "#FFD700",
                },
              }}
            >
              Contact
            </Button>
          </ScrollLink>
        </Box>

        {/* Hamburger Menu for smaller screens */}
        <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
            sx={{
              display: { xs: "block", md: "none" }, // Show only on small screens
            }}
          >
            {/* Menu Items */}
            <MenuItem onClick={handleMenuClose} component={ScrollLink} to="hero" smooth={true} duration={800}>
              Home
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={ScrollLink} to="work" smooth={true} duration={800}>
              Experience
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={ScrollLink} to="projects" smooth={true} duration={800}>
              Projects
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={ScrollLink} to="tools" smooth={true} duration={800}>
              Tools
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={ScrollLink} to="contact" smooth={true} duration={800}>
              Contact
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
