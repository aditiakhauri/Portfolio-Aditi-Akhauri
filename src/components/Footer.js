import React from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1a1a1a",
        color: "white",
        py: 3, 
        px: 4, 
      }}
    >
      <Grid container alignItems="center">
       
        <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem" }, 
              fontWeight: "bold",
            }}
          >
            Aditi Akhauri © {new Date().getFullYear()}
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "right" }, mt: { xs: 2, md: 0 } }}>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/aditi-akhauri/"
            target="_blank"
            sx={{
              color: "white",
              mx: 1, 
              transition: "color 0.3s",
              "&:hover": {
                color: "#0e76a8", 
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/aditiakhauri"
            target="_blank"
            sx={{
              color: "white",
              mx: 1,
              transition: "color 0.3s",
              "&:hover": {
                color: "#333", 
              },
            }}
          >
            <GitHubIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
