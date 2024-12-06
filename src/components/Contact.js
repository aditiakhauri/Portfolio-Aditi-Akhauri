import React, { useState } from "react";
import { Box, Typography, Grid, TextField, Button, MenuItem } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { motion } from "framer-motion";
import profileImage from "../assets/WhatsApp Image 2024-12-06 at 22.10.11.jpeg" 

import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const [error, setError] = useState(false);

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
      setError(true);
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
        (error) => {
          alert("Failed to send your message. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
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
            border: "4px solid #FF4500",
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

      {/* Right Section: Contact Form */}
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
            LET'S WORK TOGETHER
          </Typography>
        </motion.div>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            {/* Name Input */}
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

            {/* Email Input */}
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

            {/* Budget Dropdown */}
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

            {/* Message Input */}
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

          {/* Submit Button */}
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
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#FFD700",
                  color: "black",
                },
              }}
              startIcon={<SendOutlinedIcon />}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </section>
  );
};

export default Contact;
