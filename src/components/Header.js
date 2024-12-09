import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        backgroundColor: "#1a1a1a",
        padding: "10px 20px",
        zIndex: 1100,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
    
        </Box>

        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
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

          

          {/* Experience */}
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;