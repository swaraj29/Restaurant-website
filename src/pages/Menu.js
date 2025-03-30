import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Box
        sx={{
          minHeight: "100vh", // Full page height
          background: "linear-gradient(135deg, #FFF8E1 0%, #F9E4B7 100%)", // Saffron yellow to earthy beige
          py: { xs: 3, md: 5 }, // Padding for top/bottom
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "700",
            fontSize: { xs: "2rem", md: "3rem" },
            background: "linear-gradient(90deg, #D84315, #FF8A65)", // Spicy orange-red gradient
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            mb: 4,
            animation: "fadeIn 1.2s ease-in-out",
          }}
        >
          Our Menu
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: { xs: "10px", md: "20px" },
          }}
        >
          {MenuList.map((menu) => (
            <Card
              key={menu.name}
              sx={{
                maxWidth: "390px",
                m: 2,
                background: "rgba(255, 255, 255, 0.95)", // Semi-transparent white
                borderRadius: "20px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.25)",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  sx={{
                    height: "250px",
                    objectFit: "cover",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)", // Slight zoom on hover
                    },
                  }}
                  component="img"
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent sx={{ padding: "20px" }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    component="div"
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: "bold",
                      letterSpacing: "0.5px",
                      color: "#D84315", // Spicy orange-red
                      textTransform: "capitalize",
                    }}
                  >
                    {menu.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{
                      color: "#3E2723", // Deep brown for warmth
                      lineHeight: "1.6",
                      fontSize: "1rem",
                      mb: 1,
                    }}
                  >
                    {menu.description}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      color: "#388E3C", // Green for price
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    Price: ₹{menu.price}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      mt: 2,
                      borderColor: "#D84315",
                      color: "#D84315",
                      fontWeight: "bold",
                      borderRadius: "20px",
                      textTransform: "uppercase",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "#D84315",
                        color: "#FFFFFF",
                        borderColor: "#D84315",
                      },
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Layout>
  );
};

export default Menu;