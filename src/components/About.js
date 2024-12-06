import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import UpcomingOutlinedIcon from "@mui/icons-material/UpcomingOutlined";
import { motion } from "framer-motion";
import profile from "../assets/WhatsApp Image 2024-12-06 at 22.10.11.jpeg"
const About = () => {
  // Animation Variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

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
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }} 
              transition={{ duration: 0.8 }}
              variants={fadeInVariants}
              style={{
                width: "250px",
                height: "300px",
              }}
            >
              <img
                src={profile}
                alt="Profile"
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
            </motion.div>
          </Grid>

          {/* Right Section: About Content */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }} 
              transition={{ duration: 0.8 }}
              variants={fadeInVariants}
            >
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
            </motion.div>
            {[
              "I grew up in a small town with big dreams, driven by my curiosity for computers. That curiosity turned into a passion, and I graduated with a B.Tech in Computer Science and Information Security from Vellore Institute of Technology.",
              "My career started at BlockConvey, where I developed and integrated smart contracts and optimized private blockchain networks. These experiences sharpened my technical expertise in blockchain and cloud technologies.",
              "I’ve worked on fascinating projects like drowsiness detection and emotion recognition using advanced machine learning models. These challenges helped me blend AI and development in impactful ways.",
              "Today, I’m focused on mentoring and creating a supportive tech community. I believe in sharing knowledge and helping developers and businesses succeed in their journeys.",
            ].map((paragraph, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }} 
                transition={{ duration: 0.6, delay: index * 0.2 }}
                variants={fadeInVariants}
              >
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    lineHeight: "1.8",
                    color: "#dcdcdc",
                  }}
                >
                  {paragraph}
                </Typography>
              </motion.div>
            ))}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }} 
              transition={{ duration: 0.8 }}
              variants={fadeInVariants}
            >
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
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default About;
