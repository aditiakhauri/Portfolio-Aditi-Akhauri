import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import project1 from "../assets/90b6f2_96cdaef8e55c4447b8ac75564ce13538~mv2.gif";
import project2 from "../assets/NYRT.gif";
import project3 from "../assets/36010.gif";
import project4 from "../assets/emotion.gif";
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
    title: "Emotion Detection Using Voice Recognition",
    subtitle: "Portfolio Framer Template",
    image: project4,
  },
 
];

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "50px 20px",
        minHeight: "100vh", 
      }}
    >
    
      <Box sx={{ width: "100%", maxWidth: "2000px", textAlign: "center" }}>
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
            RECENT <span style={{ color: "#555" }}>PROJECTS</span>
          </Typography>
        </motion.div>

     
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} md={8} key={index}>
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
                      width: "100px",
                      height: "90px",
                      borderRadius: "10px",
                      marginRight: 2,
                   
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
