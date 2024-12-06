import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image1 from "../assets/90b6f2_96cdaef8e55c4447b8ac75564ce13538~mv2.gif";
import Image2 from "../assets/NYRT.gif";
import Image3 from "../assets/36010.gif";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Drowsiness Detection",
    description: "Built a real-time drowsiness detection model using MobileNetV2 and TensorFlow.js, achieving high accuracy and accessibility.",
    image: Image1,
  },
  {
    title: "Image Processing System",
    description: "Developed an asynchronous system to resize and compress images efficiently using Flask, Celery, and Redis.",
    image: Image2,
  },
  {
    title: "Secure Password Authentication",
    description: "Implemented phishing-resistant authentication using advanced salting and hashing techniques to secure user data.",
    image: Image3,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        background: "linear-gradient(to right, #2b2d9c, #391c68)",
        color: "white",
        padding: "50px 20px",
      }}
    >
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            My Work
          </Typography>
          <Typography variant="body1" sx={{ color: "#dcdcdc", mb: 6 }}>
            Here are some of my development projects that showcase my technical expertise and innovation.
          </Typography>
        </motion.div>

        {/* Project Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                variants={cardVariants}
              >
                <Card
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    background: "rgba(255, 255, 255, 0.1)", 
                    borderRadius: "12px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", 
                    backdropFilter: "blur(10px)", 
                  }}
                >
                  {/* Background Image */}
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: "400px",
                      height: "500px",
                      objectFit: "cover",
                      opacity: 0.8,
                      transition: "opacity 0.3s ease-in-out",
                      margin: "0 auto", 
                      "&:hover": {
                        opacity: 1, 
                      },
                    }}
                    className="project-image"
                  />

                  {/* Hover Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      color: "white",
                      opacity: 0,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "opacity 0.3s ease-in-out",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                    className="project-overlay"
                  >
                    <Typography
                      variant="h7"
                      sx={{ fontWeight: "bold", mb: 2, ml: 2, mr: 2 }}
                    >
                      {project.description}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#FFD700",
                        color: "#391c68",
                        fontWeight: "bold",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#391c68",
                          color: "#FFD700",
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>

                  {/* Project Title */}
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color:"#dcdcdc",
                      }}
                    >
                      {project.title}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* More This Way Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6C63FF",
                color: "white",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "1rem",
                padding: "10px 20px",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#5A55DA",
                },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              More This Way
            </Button>
          </Box>
        </motion.div>
      </Box>
    </section>
  );
};

export default Projects;
