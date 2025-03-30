import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography, Divider } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          minHeight: "100vh", // Full page height
          background: "linear-gradient(135deg, #FFF8E1 0%, #F9E4B7 100%)", // Saffron yellow to earthy beige
          py: { xs: 3, md: 5 }, // Padding for top/bottom
          display: "flex",
          alignItems: "center", // Vertically center content
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            my: { xs: 3, md: 5 }, // Reduced margin since outer Box handles spacing
            textAlign: "center",
            p: { xs: 2, md: 4 }, // Responsive padding
            fontFamily: "'Poppins', sans-serif",
            background: "rgba(255, 255, 255, 0.9)", // Semi-transparent white overlay
            borderRadius: "20px",
            maxWidth: "900px", // Slightly wider for better flow
            mx: "auto",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)", // Deeper shadow
            "& h4": {
              fontWeight: "700",
              my: 3,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              color: "#D84315", // Spicy orange-red for vibrancy
              letterSpacing: "1.5px",
              textTransform: "uppercase", // Bold and elegant
            },
            "& p": {
              textAlign: "justify",
              color: "#3E2723", // Deep brown for warmth
              fontSize: "1.1rem",
              lineHeight: "1.9",
              mx: { xs: 1, md: 4 },
              transition: "color 0.3s ease, transform 0.3s ease",
              "&:hover": {
                color: "#BF360C", // Darker spicy shade on hover
                transform: "translateY(-2px)", // Subtle lift
              },
            },
            "@media (max-width: 600px)": {
              my: 2,
              p: 2,
              "& h4": {
                fontSize: "1.5rem",
              },
              "& p": {
                fontSize: "1rem",
              },
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              animation: "fadeIn 1.2s ease-in-out",
              background: "linear-gradient(90deg, #D84315, #FF8A65)", // Gradient text
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent", // Gradient effect on text
            }}
          >
            Welcome To SpiceSaga Eatery
          </Typography>
          <Divider
            sx={{
              my: 2,
              borderColor: "#D84315",
              borderWidth: "2px",
              width: "100px",
              mx: "auto",
            }}
          />
          <p>
            Step into a culinary haven where every dish tells a story and every
            bite is an experience to savor. Nestled in the heart of [Location],
            our restaurant is more than just a dining destination; it’s a
            celebration of flavors, creativity, and hospitality.
          </p>
          <br />
          <p>
            As you enter, embark on a journey of gastronomic delight, guided by
            our passionate chefs who craft each dish with love and expertise.
            Whether it’s a casual brunch, a romantic dinner, or a special
            celebration, we promise an unforgettable dining experience.
          </p>
          <br />
          <p>
            Feel the warm ambiance as you explore our menu, curated to showcase
            the finest ingredients and culinary techniques. From classic comfort
            foods to innovative creations, there’s something for every palate.
          </p>
          <br />
          <p>
            It’s not just about the food—it’s about the memories we create. Our
            dedicated team ensures every moment is exceptional. So sit back,
            relax, and let us take care of the rest.
          </p>
          <br />
          <p>
            Thank you for choosing SpiceSaga Eatery. We’re honored to serve you a
            meal that will leave you craving more. Welcome to a world of culinary
            delights, where every visit feels like coming home.
          </p>
        </Box>
      </Box>

      {/* CSS keyframes for animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Layout>
  );
};

export default About;