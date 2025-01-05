import React from "react";
import { Box, Typography, Grid, Card, CardContent, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import GCPLogo from "../assets/gcp.webp";
import AWSLogo from "../assets/aws.webp";
import PostgreSQLLogo from "../assets/postgresql.webp";
import ReactLogo from "../assets/react.png";
import PythonLogo from "../assets/images.jpeg";
import KafkaLogo from "../assets/apache-kafka.jpg";
import FlaskLogo from "../assets/flask.jpg";
import DjangoLogo from "../assets/django.jpeg";
import MongoDBLogo from "../assets/mongodb.jpeg";
import MySQLLogo from "../assets/mysql.webp";
import GitLogo from "../assets/git.png";
import DockerLogo from "../assets/docker.svg";
import KubernetesLogo from "../assets/kubernetes.png";
import JavaLogo from "../assets/java.webp";
import JavaScriptLogo from "../assets/javascript.jpeg";
import OAuthLogo from "../assets/oauth.png";

const tools = [
  { name: "GCP", description: "Cloud Platform", logo: GCPLogo },
  { name: "AWS", description: "Cloud Services", logo: AWSLogo },
  { name: "PostgreSQL", description: "Database Management", logo: PostgreSQLLogo },
  { name: "ReactJS", description: "Frontend Framework", logo: ReactLogo },
  { name: "Python", description: "Programming Language", logo: PythonLogo },
  { name: "Kafka", description: "Message Streaming", logo: KafkaLogo },
  { name: "Flask", description: "Web Framework", logo: FlaskLogo },
  { name: "Django", description: "Web Framework", logo: DjangoLogo },
  { name: "MongoDB", description: "NoSQL Database", logo: MongoDBLogo },
  { name: "MySQL", description: "Relational Database", logo: MySQLLogo },
  { name: "Git", description: "Version Control", logo: GitLogo },
  { name: "Docker", description: "Containerization", logo: DockerLogo },
  { name: "Kubernetes", description: "Orchestration", logo: KubernetesLogo },
  { name: "Java", description: "Programming Language", logo: JavaLogo },
  { name: "JavaScript", description: "Programming Language", logo: JavaScriptLogo },
  { name: "OAuth", description: "Authentication", logo: OAuthLogo },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Tools = () => {
  return (
    <section
      id="tools"
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
     
      <Box sx={{ width: "80%", maxWidth: "1200px", textAlign: "center" }}>
     
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
            PREMIUM <span style={{ color: "#555" }}>TOOLS</span>
          </Typography>
        </motion.div>

       
        <Grid container spacing={4} justifyContent="center">
          {tools.map((tool, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.2 }}
                variants={cardVariants}
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
                    justifyContent: "center",
                  }}
                >
                  <Avatar
                    src={tool.logo}
                    alt={tool.name}
                    sx={{
                      width: "50px",
                      height: "50px",
                      marginRight: 2,
                      border: "2px solid #6C63FF",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      {tool.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#B0B0B0",
                      }}
                    >
                      {tool.description}
                    </Typography>
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

export default Tools;
