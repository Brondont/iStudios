import React from "react";
import { Box, Typography } from "@mui/material";

import ContactUs from "../../components/contactUs/ContactUs";

const AboutUsPage = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          mt: 24,
        }}
      >
        <Typography
          sx={{ fontSize: "64px", lineHeight: "77.45px", fontWeight: 500 }}
        >
          About us
        </Typography>
        <Typography
          sx={{
            fontSize: "32px",
            lineHeight: "38.73px",
            maxWidth: "913px",
            mt: 12,
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Amet commodo odio diam
          ultricies nec massa. Feugiat neque at ut cursus est velit nibh
          sagittis sagittis. Dui quam vel pretium tristique scelerisque nisl
          consectetur dui enim. Blandit orci dapibus ac dictumst libero nunc dui
          sed tincidunt.
        </Typography>
        <Typography sx={{ fontSize: "200px", mt: 12 }}>iStudios</Typography>
      </Box>
      <ContactUs />
    </Box>
  );
};

export default AboutUsPage;
