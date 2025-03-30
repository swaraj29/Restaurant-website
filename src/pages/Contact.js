import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Divider,
} from "@mui/material";

const Contact = () => {
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
            my: { xs: 3, md: 5 }, // Responsive margin
            maxWidth: "800px", // Constrain width
            mx: "auto", // Center on larger screens
            textAlign: { xs: "center", md: "left" }, // Responsive alignment
            background: "rgba(255, 255, 255, 0.9)", // Semi-transparent white overlay
            borderRadius: "20px",
            p: { xs: 2, md: 4 }, // Responsive padding
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)", // Deeper shadow
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              mb: 2,
              fontFamily: "'Poppins', sans-serif",
              background: "linear-gradient(90deg, #D84315, #FF8A65)", // Spicy orange-red gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              animation: "fadeIn 1.2s ease-in-out",
            }}
          >
            Contact SpiceSaga Eatery
          </Typography>
          <Divider
            sx={{
              my: 2,
              borderColor: "#D84315",
              borderWidth: "2px",
              width: "100px",
              mx: { xs: "auto", md: 0 }, // Centered on mobile, left-aligned on desktop
            }}
          />
          <Typography
            variant="body1"
            sx={{
              textAlign: "justify",
              color: "#3E2723", // Deep brown for warmth
              fontSize: "1.1rem",
              lineHeight: "1.9",
              fontFamily: "'Poppins', sans-serif",
              mx: { xs: 1, md: 2 },
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#BF360C", // Darker spicy shade on hover
              },
            }}
          >
            At SpiceSaga Eatery, we value open communication with our customers.
            Whether you have questions about our menu, want to make a reservation,
            provide feedback, or raise a concern, we’re here to assist you.
          </Typography>

          <Box
            sx={{
              mt: 4, // Margin-top for spacing
              width: { xs: "90%", sm: "600px" }, // Responsive width
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            <TableContainer
              component={Paper}
              sx={{
                borderRadius: "15px",
                background: "linear-gradient(135deg, #FFFFFF 0%, #FFF8E1 100%)", // White to soft saffron
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)", // Slight lift on hover
                  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Table aria-label="contact table">
                <TableHead>
                  <TableRow
                    sx={{
                      bgcolor: "#D84315", // Spicy orange-red header
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                  >
                    <TableCell
                      align="center"
                      sx={{
                        color: "#FFFFFF",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        fontFamily: "'Poppins', sans-serif",
                        py: 2,
                      }}
                    >
                      Contact Details
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{
                      "&:hover": { bgcolor: "#FFF8E1" },
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    <TableCell sx={{ py: 2 }}>
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <SupportAgentIcon
                          sx={{
                            color: "#D32F2F",
                            mr: 2,
                            fontSize: "28px",
                            transition: "transform 0.3s ease",
                            "&:hover": { transform: "scale(1.2)" },
                          }}
                        />
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            color: "#3E2723",
                            fontSize: "1.1rem",
                          }}
                        >
                          1800-00-0000 (toll-free)
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      "&:hover": { bgcolor: "#FFF8E1" },
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    <TableCell sx={{ py: 2 }}>
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <MailIcon
                          sx={{
                            color: "#0288D1",
                            mr: 2,
                            fontSize: "28px",
                            transition: "transform 0.3s ease",
                            "&:hover": { transform: "scale(1.2)" },
                          }}
                        />
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            color: "#3E2723",
                            fontSize: "1.1rem",
                          }}
                        >
                          help@spicesaga.com
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      "&:hover": { bgcolor: "#FFF8E1" },
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    <TableCell sx={{ py: 2 }}>
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <CallIcon
                          sx={{
                            color: "#388E3C",
                            mr: 2,
                            fontSize: "28px",
                            transition: "transform 0.3s ease",
                            "&:hover": { transform: "scale(1.2)" },
                          }}
                        />
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            color: "#3E2723",
                            fontSize: "1.1rem",
                          }}
                        >
                          +91 79924 70659
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
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

export default Contact;