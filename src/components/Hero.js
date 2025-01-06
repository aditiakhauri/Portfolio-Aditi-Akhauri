import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LinkIcon from "@mui/icons-material/Link";
import profile from "../assets/WhatsApp Image 2024-12-06 at 22.10.11.jpeg";

const Hero = () => {
  const overleafResumeLink = "https://www.overleaf.com/read/rzfxvghvdnyr#449811";

  return (
    <section id="hero">
      <Box
        sx={{
          mt: 5,
          backgroundColor: "#1a1a1a",
          color: "white",
          py: { xs: 5, md: 10 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Profile Card */}
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
                  gap: 2,
                  color: "black",
                }}
              >
                <IconButton
                  component="a"
                  href="https://github.com/aditiakhauri"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "black" }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/aditi-akhauri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "black" }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="mailto:akhauriaaditi@gmail.com"
                  sx={{ color: "black" }}
                >
                  <EmailIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Hero Text and Stats */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              SOFTWARE <span style={{ color: "#555" }}>ENGINEER</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#dcdcdc",
                mb: 4,
                fontSize: { xs: "1rem", sm: "1.2rem" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Driven software engineer with expertise in building scalable
              solutions and optimizing system performance. Skilled in API
              development, database management, and creating seamless user
              interfaces. Passionate about developing efficient and innovative
              software that solves real-world problems.
            </Typography>

            {/* Stats */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                mb: 6,
                justifyContent: { xs: "center", sm: "flex-start" }, 
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  width: "200px",
                  height: "150px",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: { xs: "1.5rem", md: "2rem" },
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  width: "200px",
                  height: "150px",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: { xs: "1.5rem", md: "2rem" },
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

            {/* Skills and Resume */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
              }}
            >
              <Box
                sx={{
                  background: "#ed5d3e",
                  padding: "20px",
                  borderRadius: "12px",
                  flex: 1,
                  textAlign: "center",
                  color: "white",
                  
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                >
                  FULL STACK, CLOUD DEVELOPMENT, CI/CD, BLOCKCHAIN
                </Typography>
              </Box>
              <Box
                sx={{
                  background: "#AFDD57",
                  padding: "20px",
                  borderRadius: "12px",
                  flex: 1,
                  textAlign: "center",
                  color: "black",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration:"none",
                  gap: 1,
                  "&:hover": {
                    opacity: 0.7,
                  },
                }}
                component="a"
                href={overleafResumeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  RESUME
                </Typography>
                <LinkIcon fontSize="small" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Hero;
