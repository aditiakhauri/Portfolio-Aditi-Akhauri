import React from "react";
import { Box, Typography, Grid, } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import profile from "../assets/WhatsApp Image 2024-12-06 at 22.10.11.jpeg"

const Hero = () => {
  return (
    <section id="hero">
      <Box
        sx={{
          backgroundColor: "#1a1a1a",
          color: "white",
          py: 10,
          px: 4,
        }}
      >
        <Grid container spacing={4} alignItems="center">
     
          <Grid item xs={12} md={5} textAlign="center">
            <Box
              sx={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                padding: "20px",
                maxWidth: "300px",
                margin: "0 auto",
              }}
            >
              <Box
                component="img"
                src={profile}
                alt="Profile"
                sx={{
                  width: "100%",
                  borderRadius: "20px",
                  marginBottom: "10px",
                }}
              />
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", mb: 1, color: "black" }}
              >
                ADITI AKHAURI
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "gray",
                  fontSize: "0.9rem",
                  mb: 2,
                }}
              >
                A Software Engineer who has developed countless innovative
                solutions.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                  color: "black",
                }}
              >
                <InstagramIcon />
                <TwitterIcon />
                <EmailIcon />
                <SportsEsportsIcon />
              </Box>
            </Box>
          </Grid>

  
          <Grid item xs={12} md={7}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: "3rem",
              }}
            >
              SOFTWARE <span style={{ color: "#555" }}>ENGINEER</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#dcdcdc",
                mb: 4,
                fontSize: "1.2rem",
              }}
            >
              Passionate about creating intuitive and engaging user experiences.
              Specialize in transforming ideas into beautifully crafted
              products.
            </Typography>

         
            <Box
              sx={{
                display: "flex",
                gap: 4,
                mb: 6,
              }}
            >
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  1+
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "gray",
                  }}
                >
                  YEARS OF EXPERIENCE
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  10+
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "gray",
                  }}
                >
                  PROJECTS COMPLETED
                </Typography>
              </Box>
              
            </Box>

            {/* Skills */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box
                sx={{
                  background: "#ed5d3e",
                  padding: "20px",
                  borderRadius: "12px",
                  width: "50%",
                  textAlign: "center",
                  color: "white",
                  cursor: "pointer",
                  "&:hover": {

                    opacity:0.7,
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  DYNAMIC ANIMATION, MOTION DESIGN
                </Typography>
              </Box>
              <Box
                sx={{
                  background: "#c1fd4b",
                  padding: "20px",
                  borderRadius: "12px",
                  width: "50%",
                  textAlign: "center",
                  color: "black",
                  cursor: "pointer",
                  "&:hover": {
                    opacity:0.7,
                    
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  FRAMER, FIGMA, WORDPRESS, REACTJS
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Hero;
