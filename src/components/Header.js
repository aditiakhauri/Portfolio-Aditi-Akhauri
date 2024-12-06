import React from "react";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
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
          <span style={{ color: "#FF4500" }}>Aditi</span>Akhauri
        </Box>

        {/* Navigation Icons */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          {/* Home */}
          <ScrollLink to="home" smooth={true} duration={800}>
            <IconButton
              sx={{
                color: "white",
                "&:hover": {
                  color: "#FFD700",
                },
              }}
            >
              <HomeOutlinedIcon />
            </IconButton>
          </ScrollLink>

          {/* Projects */}
          <ScrollLink to="projects" smooth={true} duration={800}>
            <IconButton
              sx={{
                color: "white",
                "&:hover": {
                  color: "#FFD700",
                },
              }}
            >
              <FolderOpenOutlinedIcon />
            </IconButton>
          </ScrollLink>

          {/* Experience */}
          <ScrollLink to="experience" smooth={true} duration={800}>
            <IconButton
              sx={{
                color: "white",
                "&:hover": {
                  color: "#FFD700",
                },
              }}
            >
              <WorkOutlineOutlinedIcon />
            </IconButton>
          </ScrollLink>

          {/* Tools */}
          <ScrollLink to="tools" smooth={true} duration={800}>
            <IconButton
              sx={{
                color: "white",
                "&:hover": {
                  color: "#FFD700",
                },
              }}
            >
              <BuildOutlinedIcon />
            </IconButton>
          </ScrollLink>

          {/* Contact */}
          <ScrollLink to="contact" smooth={true} duration={800}>
            <IconButton
              sx={{
                color: "white",
                "&:hover": {
                  color: "#FFD700",
                },
              }}
            >
              <ContactMailOutlinedIcon />
            </IconButton>
          </ScrollLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
