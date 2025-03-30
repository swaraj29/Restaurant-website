import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import { Box, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <Layout>
      <Box
        sx={{
          minHeight: "100vh", // Full viewport height
          backgroundImage: `linear-gradient(135deg, rgba(255, 248, 225, 0.7), rgba(249, 228, 183, 0.7)), url(${Banner})`, // Overlay gradient on image
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          position: "relative",
          "&::before": { // Subtle overlay for better text contrast
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.2)", // Dark overlay
            zIndex: 1,
          },
        }}
      >
        <Box
          className="headerContainer"
          sx={{
            position: "relative",
            zIndex: 2, // Above overlay
            p: { xs: 2, md: 4 },
            background: "rgba(255, 255, 255, 0.9)", // Semi-transparent white card
            borderRadius: "20px",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
            maxWidth: "600px",
            mx: "auto",
            animation: "fadeIn 1.5s ease-in-out",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: "700",
              fontSize: { xs: "2.5rem", md: "4rem" }, // Responsive font size
              background: "linear-gradient(90deg, #D84315, #FF8A65)", // Spicy orange-red gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "2px",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            SpiceSaga Eatery
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#3E2723", // Deep brown for warmth
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              fontWeight: "400",
              mb: 3,
              lineHeight: "1.6",
            }}
          >
            Savor the Best Flavors in India
          </Typography>
          <Button
            component={Link}
            to="/menu"
            variant="contained"
            sx={{
              bgcolor: "#D84315", // Spicy orange-red
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: "1.1rem",
              padding: { xs: "10px 20px", md: "12px 30px" },
              borderRadius: "30px",
              textTransform: "uppercase",
              boxShadow: "0 6px 15px rgba(216, 67, 21, 0.4)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                bgcolor: "#BF360C", // Darker shade on hover
                transform: "translateY(-3px)",
                boxShadow: "0 10px 25px rgba(216, 67, 21, 0.6)",
              },
            }}
          >
            Order Now
          </Button>
        </Box>
      </Box>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Layout>
  );
};

export default Home;