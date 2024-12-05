import React, { useEffect, useRef } from "react";
import { Box, Typography, Grid, Card, CardContent, List, ListItem } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  return (
    <section
      id="work"
      style={{
        padding: "50px 20px",
        background: "linear-gradient(to right, #2b2d9c, #391c68)",
        color: "white",
      }}
    >
      <Box sx={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 6,
            textAlign: "center",
          }}
        >
          Experience
        </Typography>
        <Grid container spacing={4}>
          {experiences.map((experience, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  padding: 3,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                  borderRadius: "12px",
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {experience.duration}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {experience.title} - {experience.company}
                  </Typography>
                  <List
                    sx={{
                      mt: 2,
                      pl: 2,
                      "& .MuiListItem-root": {
                        position: "relative",
                        marginBottom: "10px",
                        animation: "fadeIn 0.5s ease-in-out",
                      },
                    }}
                  >
                    {experience.points.map((point, idx) => (
                      <ListItem
                        key={idx}
                        sx={{
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            left: "-15px",
                            top: "10px",
                            width: "8px",
                            height: "8px",
                            backgroundColor: "#FFD700",
                            borderRadius: "50%",
                            transition: "0.3s ease-in-out",
                          },
                          "&:hover::before": {
                            backgroundColor: "white",
                            boxShadow: "0 0 10px #FFD700",
                          },
                        }}
                      >
                        {point}
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Work;
