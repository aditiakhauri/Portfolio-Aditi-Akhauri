import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(to right, #2b2d9c, #391c68)",
        padding: "10px 20px",
      }}
    >
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold", display: "flex", alignItems: "center" }}
        >
          <span style={{ color: "#FFD700" }}>Aditi</span>Akhauri
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <ScrollLink
            to="work"
            smooth={true}
            duration={800}
            style={{
              textDecoration: "none",
              fontSize: "1rem",
              textTransform: "none",
              color: "#fff",
              cursor: "pointer",
            }}
            activeClass="active"
            spy={true}
          >
            <Button
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "#FFD700",
                  borderBottom: "2px solid #FFD700",
                },
              }}
            >
              Work
            </Button>
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth={true}
            duration={800}
            style={{
              textDecoration: "none",
              fontSize: "1rem",
              textTransform: "none",
              color: "#fff",
              cursor: "pointer",
            }}
            activeClass="active"
            spy={true}
          >
            <Button
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "#FFD700",
                  borderBottom: "2px solid #FFD700",
                },
              }}
            >
              About
            </Button>
          </ScrollLink>

          <ScrollLink
            to="projects"
            smooth={true}
            duration={800}
            style={{
              textDecoration: "none",
              fontSize: "1rem",
              textTransform: "none",
              color: "#fff",
              cursor: "pointer",
            }}
            activeClass="active"
            spy={true}
          >
            <Button
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "#FFD700",
                  borderBottom: "2px solid #FFD700",
                },
              }}
            >
              Projects
            </Button>
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={800}
            style={{
              textDecoration: "none",
              fontSize: "1rem",
              textTransform: "none",
              color: "#fff",
              cursor: "pointer",
            }}
            activeClass="active"
            spy={true}
          >
           
          </ScrollLink>
        </Box>

        {/* Call to Action */}
        <Button
          variant="outlined"
          sx={{
            marginLeft: "20px",
            borderColor: "#FFD700",
            color: "#FFD700",
            textTransform: "none",
            borderRadius: "25px",
            padding: "5px 15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              backgroundColor: "#FFD700",
              color: "black", // Ensure text color changes to black
              "& .MuiSvgIcon-root": {
                color: "black", // Ensure icon color changes to black
              },
            },
          }}
          href="#contact"
          startIcon={
            <SendOutlinedIcon
              sx={{
                color: "#FFD700", 
              }}
            />
          }
        >
          Let's Talk
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
