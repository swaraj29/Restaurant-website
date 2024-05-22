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
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Contact My Restaurant
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "justify" }}>
          At [SpiceSaga Eatery], we value open communication with our customers. Whether you have questions about our menu, want to make a reservation, provide feedback, or raise a concern, we're here to assist you.
        </Typography>
      </Box>
      <Box sx={{ m: 3, width: "600px", ml: 10, "@media (max-width:600px)": { width: "300px" } }}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow sx={{ bgcolor: "black" }}>
                <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", mr: 1 }} />
                  <Typography variant="body1" sx={{ display: "inline", verticalAlign: "middle" }}>
                    1800-00-0000 (toll-free)
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", mr: 1 }} />
                  <Typography variant="body1" sx={{ display: "inline", verticalAlign: "middle" }}>
                    028swarajkumar@gmail.com
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", mr: 1 }} />
                  <Typography variant="body1" sx={{ display: "inline", verticalAlign: "middle" }}>
                    7992470659
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
