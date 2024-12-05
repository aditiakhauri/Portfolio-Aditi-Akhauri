import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import UpcomingOutlinedIcon from "@mui/icons-material/UpcomingOutlined";


const About = () => {
  return (
    <section id="about">
      <Box
        sx={{
          background: "linear-gradient(to right, #2b2d9c, #391c68)",
          color: "white",
          py: 10,
          px: 4,
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Left Section: Profile Image */}
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <img
              src="/path-to-your-image.jpg" 
              alt="Profile"
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                border: "4px solid #FFD700",
                objectFit: "cover",
              }}
            />
          </Grid>

          {/* Right Section: About Content */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                mb: 2,
                position: "relative",
              }}
            >
              My Long Story Short
              <span
                style={{
                  display: "block",
                  width: "60px",
                  height: "3px",
                  backgroundColor: "#FFD700",
                  marginTop: "10px",
                }}
              ></span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: "1.8",
                color: "#dcdcdc",
              }}
            >
              I grew up in a small town with big dreams, driven by my curiosity for
          computers. That curiosity turned into a passion, and I graduated with
          a B.Tech in Computer Science and Information Security from Vellore
          Institute of Technology.

            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: "1.8",
                color: "#dcdcdc",
              }}
            >
              My career started at BlockConvey, where I developed and integrated
          smart contracts and optimized private blockchain networks. These
          experiences sharpened my technical expertise in blockchain and cloud
          technologies.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: "1.8",
                color: "#dcdcdc",
              }}
            >
              I’ve worked on fascinating projects like drowsiness detection and
          emotion recognition using advanced machine learning models. These
          challenges helped me blend AI and development in impactful ways.
            </Typography>
          
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            lineHeight: "1.8",
            color: "#dcdcdc",
          }}
        >
          Today, I’m focused on mentoring and creating a supportive tech
          community. I believe in sharing knowledge and helping developers and
          businesses succeed in their journeys.
        </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFD700",
                color: "#391c68",
                fontWeight: "bold",
                textTransform: "none",
                mt: 2,
                "&:hover": {
                  backgroundColor: "#391c68",
                  color: "#FFD700",
                },
              }}
              startIcon={<UpcomingOutlinedIcon />}
            >
              Let's Talk
            </Button>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default About;
