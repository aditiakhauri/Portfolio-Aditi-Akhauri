import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <section id="hero">
      <Box
        sx={{
          background: "linear-gradient(to right, #2b2d9c, #391c68)", 
          color: "white",
          py: 10,
          px: 4, 
          textAlign: "center", 
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "2rem", 
              sm: "3rem", 
              lg: "4rem", 
            },
            mb: 2, 
          }}
        >
          "Good Software, Like Wine, Takes Time"
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.5rem",
            },
            color: "#dcdcdc",
            mb: 4,
          }}
        >
          - Joel Spolsky, not Me 
        </Typography>
        
      </Box>
    </section>
  );
};

export default Hero;
