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
        
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
            ml: "auto",
          }}
        >
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
              display: { xs: "block", md: "none" },
              "& .MuiPaper-root": {
                backgroundColor: "#1a1a1a", 
              },
            }}
          >
      
            <MenuItem
              onClick={handleMenuClose}
              sx={{
                color: "white",
                "&:hover": {
                  color: "#FFD700", 
                },
              }}
            >
              <ScrollLink
                to="hero"
                smooth={true}
                duration={800}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Home
              </ScrollLink>
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              sx={{
                color: "white",
                "&:hover": {
                  color: "#FFD700",
                },
              }}
            >
              <ScrollLink
                to="work"
                smooth={true}
                duration={800}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Experience
              </ScrollLink>
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              sx={{
                color: "white",
                "&:hover": {
                  color: "#FFD700",
                },
              }}
            >
              <ScrollLink
                to="projects"
                smooth={true}
                duration={800}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Projects
              </ScrollLink>
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              sx={{
                color: "white",
                "&:hover": {
                  color: "#FFD700",
                },
              }}
            >
              <ScrollLink
                to="tools"
                smooth={true}
                duration={800}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Tools
              </ScrollLink>
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              sx={{
                color: "white",
                "&:hover": {
                  color: "#FFD700",
                },
              }}
            >
              <ScrollLink
                to="contact"
                smooth={true}
                duration={800}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Contact
              </ScrollLink>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
