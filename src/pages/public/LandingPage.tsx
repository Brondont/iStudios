import React from "react";
import { Box, Typography } from "@mui/material";

import computerImage from "../../public/images/computer.png";

const LandingPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          width: "100vw",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "20%",
            left: "15%",
            zIndex: 1,
          }}
        >
          <Typography
            sx={{ fontSize: "60px", fontWeight: 500, lineHeight: "72.61px" }}
          >
            Empowering Brands to Shine Bright:
          </Typography>
          <Typography
            sx={{ fontSize: "60px", fontWeight: 500, lineHeight: "72.61px" }}
          >
            Welcome to <span style={{ fontWeight: 600 }}>iStudios</span>,
          </Typography>
          <Typography
            sx={{ fontSize: "60px", fontWeight: 500, lineHeight: "72.61px" }}
          >
            Where Creativity
          </Typography>
          <Typography
            sx={{ fontSize: "60px", fontWeight: 500, lineHeight: "72.61px" }}
          >
            Meets Strategy
          </Typography>
        </Box>
        <img
          src={computerImage}
          alt=""
          style={{
            top: "36%",
            zIndex: 0,
            left: "35%",
            position: "absolute",
            width: "65%",
            height: "50%",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alighItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "35%",
            zIndex: 2,
            backgroundColor: "primary.main",
            mt: "80vh",
            p: "65px",
          }}
        >
          <Typography
            sx={{
              width: "60ch",
              color: "primary.contrastText",
              fontSize: "30px",
              lineHeight: "36.31px",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            At iStudios, we are a full-service digital marketing agency
            dedicated to helping businesses like yours thrive in the online
            landscape. Our team of certified experts leverages cutting-edge
            strategies in SEO, PPC advertising, and content marketing to deliver
            measurable results and exceptional RIO.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ position: "relative", display: "flex" }}>
        <Box>HELLO RETARDDD</Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
