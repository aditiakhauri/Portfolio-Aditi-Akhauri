import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import profileImage from "../assets/WhatsApp Image 2024-12-06 at 22.10.11.jpeg"  
import project1 from "../assets/90b6f2_96cdaef8e55c4447b8ac75564ce13538~mv2.gif"; 
import project2 from "../assets/NYRT.gif";
import project3 from "../assets/36010.gif";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const projects = [
  {
    title: "Drowsiness Detection Model",
    subtitle: "SaaS Framer Template",
    image: project1,
  },
  {
    title: "Image Processing Application",
    subtitle: "SaaS Framer Template",
    image: project2,
  },
  {
    title: "Secure Password Authentication",
    subtitle: "SaaS Framer Template",
    image: project3,
  },
  {
    title: "Secure Password Authentication",
    subtitle: "Portfolio Framer Template",
    image: project1,
  },
  {
    title: "Emotion Detection Using Voice Recognition",
    subtitle: "Portfolio Framer Template",
    image: project2,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        display: "flex",
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "50px 20px",
      }}
    >
      {/* Fixed Left Section */}
      <Box
        sx={{
          position: "sticky",
          top: "20px",
          width: "30%",
          maxWidth: "300px",
          height: "100%",
          marginRight: "20px",
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <Box
          component="img"
          src={profileImage}
          alt="Profile"
          sx={{
            width: "100%",
            borderRadius: "20px",
            marginBottom: "10px",
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 1,
            color: "black",
            textAlign: "center",
          }}
        >
          ADITI AKHAURI
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "gray",
            fontSize: "0.9rem",
            textAlign: "center",
          }}
        >
          A Software Engineer who has developed countless innovative solutions.
        </Typography>
      </Box>

      {/* Right Section: Projects */}
      <Box sx={{ width: "70%" }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 6,
              textAlign: "center",
            }}
          >
            RECENT PROJECTS
          </Typography>
        </motion.div>

        {/* Project List */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ amount: 0.3 }}
              >
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                    borderRadius: "12px",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "10px",
                      marginRight: 2,
                      border: "2px solid #6C63FF",
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#B0B0B0",
                      }}
                    >
                      {project.subtitle}
                    </Typography>
                  </CardContent>
                  <Button
                    sx={{
                      color: "#FF4500",
                      "&:hover": {
                        color: "#FFD700",
                      },
                    }}
                  >
                    <ArrowOutwardIcon />
                  </Button>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Projects;
