import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          fontFamily: "'Arial', sans-serif", // Changed font to Arial
          backgroundColor: "#C8E6C9", // Changed background color to green
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Restaurant</Typography>
        <p>
        "Welcome to [SpiceSaga Eatery]! Step into a culinary haven where every dish tells a story and every bite is an experience to savor. Nestled in the heart of [Location], our restaurant is more than just a dining destination; it's a celebration of flavors, creativity, and hospitality.

        </p>
        <br />
        <p>
        As you enter, be prepared to embark on a journey of gastronomic delight, guided by our passionate chefs who meticulously craft each dish with love and expertise. Whether you're here for a casual brunch with friends, a romantic dinner for two, or a special celebration with family, we promise to make your dining experience unforgettable.

        </p>
        <br/>

        <p>
        Feel the warm ambiance envelop you as you take a seat and peruse our menu, carefully curated to showcase the finest ingredients and culinary techniques. From classic comfort foods to innovative culinary creations, there's something to tempt every palate.

        </p>
        <br/>

        <p>
        But it's not just about the food; it's about the memories we create together. Our dedicated team is here to ensure that every moment you spend with us is nothing short of exceptional. So sit back, relax, and let us take care of the rest.

        </p>
        <br/>
        <p>
        Thank you for choosing [SpiceSaga Eatery]. We're honored to have you here, and we look forward to serving you a meal that will leave you craving more. Welcome to a world of culinary delights, where every visit feels like coming home."
        </p>
        <br/>
      </Box>
    </Layout>
  );
};

export default About;
