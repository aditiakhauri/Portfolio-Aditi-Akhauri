import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import profile from "../assets/WhatsApp Image 2024-12-06 at 22.10.11.jpeg";
import resumeFile from "../assets/Aditi_s_Resume-2.pdf"; 
const Hero = () => {
  const handleResumeDownload = () => {

    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Aditi_Akhauri_Resume.pdf"; 
  };

  return (
    <section id="hero">
      <Box
        sx={{
          mt:5,
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
                  href="https://www.linkedin.com/in/aditi-akhauri-412530202/"
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
              Driven software engineer with expertise in building scalable
              solutions and optimizing system performance. Skilled in API
              development, database management, and creating seamless user
              interfaces. Passionate about developing efficient and innovative
              software that solves real-world problems.
            </Typography>

     
            <Box
              sx={{
                display: "flex",
                gap: 4,
                mb: 6,
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
                  padding: "20px",
                  width: "150px",
                  height: "100px",
                  textAlign: "center",
                }}
              >
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  padding: "20px",
                  width: "150px",
                  height: "100px",
                  textAlign: "center",
                  ml: 2,
                }}
              >
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
                 
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  FULL STACK, CLOUD DEVELOPMENT, CI/CD, BLOCKHAIN
                </Typography>
              </Box>
              <Box
                sx={{
                  background: "#AFDD57",
                  padding: "20px",
                  borderRadius: "12px",
                  width: "50%",
                  textAlign: "center",
                  color: "black",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  "&:hover": {
                    opacity: 0.7,
                  },
                }}
                onClick={handleResumeDownload}
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
                <FileDownloadIcon fontSize="small" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Hero;
