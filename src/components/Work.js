import React from "react";
import { Box, Typography, Grid, Card, CardContent, List, ListItem } from "@mui/material";
import { motion } from "framer-motion";

const Work = () => {
  const experiences = [
    {
      title: "Software Development Engineer",
      company: "BlockConvey, New York City, NY",
      duration: "Aug 2024 – Present",
      points: [
        "Contributed to scaling a 0-1 startup from pre-seed to seed stage, optimizing operations and driving growth.",
        "Built 5+ scalable APIs using Flask/Python, capable of handling 6,000+ requests per minute with 0% downtime.",
        "Optimized IPFS storage on GCP, improving retrieval speeds by 30%.",
        "Managed PostgreSQL, MongoDB, and Google Firestore databases, ensuring data integrity.",
        "Deployed applications on GCP App Engine, reducing operational overhead.",
        "Reduced production bugs by 40% with Pytest, improving system reliability.",
        "Built Solidity smart contracts and an AI-powered chatbot using Llama 3.2.",
      ],
    },
    {
      title: "Software Development Intern",
      company: "BlockConvey, New York City, NY",
      duration: "Jun 2023 – Jul 2024",
      points: [
        "Enhanced ML prediction accuracy by 20% using Google Cloud and Vertex AI.",
        "Designed the project’s architecture, reducing costs by 15%.",
        "Built a ReactJS-based demo website, increasing user interaction by 30%.",
        "Implemented a scalable CloudSQL database for high availability.",
      ],
    },
    {
      title: "Machine Learning Project Intern",
      company: "FrugalX, Bangalore, Karnataka",
      duration: "May 2023 – Jun 2023",
      points: [
        "Built a real-time drowsiness detection model using MobileNetV2, achieving 95% accuracy.",
        "Deployed the model via TensorFlow.js for lightweight, web-based detection.",
        "Documented the project extensively for scalability and future enhancements.",
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="work"
      style={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: "100vh", 
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "50px 20px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px", 
          textAlign: "center",
        }}
      >
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
            }}
          >
            WORK <span style={{ color: "#555" }}>EXPERIENCE</span>
          </Typography>
        </motion.div>

       
        <Grid container spacing={4}>
          {experiences.map((experience, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                variants={cardVariants}
              >
                <Card
                  sx={{
                    padding: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                    borderRadius: "12px",
                    textAlign: "left",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        mb: 1,
                        color: "#FFD700",
                      }}
                    >
                      {experience.duration}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        mb: 1,
                      }}
                    >
                      {experience.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#dcdcdc",
                        mb: 2,
                      }}
                    >
                      {experience.company}
                    </Typography>
                    <List sx={{ pl: 2 }}>
                      {experience.points.map((point, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ amount: 0.3 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                          <ListItem
                            sx={{
                              position: "relative",
                              pl: 2,
                              "&::before": {
                                content: '""',
                                position: "absolute",
                                left: 0,
                                top: "12px",
                                width: "8px",
                                height: "8px",
                                backgroundColor: "#FFD700",
                                borderRadius: "50%",
                              },
                            }}
                          >
                            {point}
                          </ListItem>
                        </motion.div>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Work;
