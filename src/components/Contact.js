import React, { useState } from "react";
import { Box, Typography, Grid, TextField, Button, MenuItem } from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

 

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(
        () => {
          alert("Your message has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            budget: "",
            message: "",
          });
        },
        () => {
          alert("Failed to send your message. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
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
          maxWidth: "800px", 
          textAlign: "center",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={cardVariants}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 6,
              textAlign: "center",
            }}
          >
            LET'S WORK <span style={{ color: "#555" }}>TOGETHER </span>
          </Typography>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={cardVariants}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={4}>
           
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="filled"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                sx={{
                  backgroundColor: "#333",
                  color: "white",
                  borderRadius: "5px",
                  "& .MuiFilledInput-root": {
                    color: "white",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#aaa",
                  },
                }}
              />
            </Grid>

      
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="filled"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                sx={{
                  backgroundColor: "#333",
                  color: "white",
                  borderRadius: "5px",
                  "& .MuiFilledInput-root": {
                    color: "white",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#aaa",
                  },
                }}
              />
            </Grid>

          
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                variant="filled"
                label="Budget (Set to USD for global use)"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                sx={{
                  backgroundColor: "#333",
                  color: "white",
                  borderRadius: "5px",
                  "& .MuiFilledInput-root": {
                    color: "white",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#aaa",
                  },
                }}
              >
                <MenuItem value="Below $500">Below $500</MenuItem>
                <MenuItem value="$500 - $1000">$500 - $1000</MenuItem>
                <MenuItem value="Above $1000">Above $1000</MenuItem>
              </TextField>
            </Grid>

          
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="filled"
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                multiline
                rows={4}
                sx={{
                  backgroundColor: "#333",
                  color: "white",
                  borderRadius: "5px",
                  "& .MuiFilledInput-root": {
                    color: "white",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#aaa",
                  },
                }}
              />
            </Grid>
          </Grid>

      
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#FF4500",
                color: "white",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "1rem",
                padding: "10px 20px",
                borderRadius: "10px",
                minWidth: "800px",
                "&:hover": {
                  backgroundColor: "#FFD700",
                  color: "black",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </motion.form>
      </Box>
    </section>
  );
};

export default Contact;
