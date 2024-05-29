import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Skeleton } from "@mui/material";

import WorkCard from "../../components/wordCard/WorkCard";
import EmblaCarousel from "../../components/embla/EmblaCarousel";
import ContactUs from "../../components/contactUs/ContactUs";
import "../../components/embla/css/base.css";
import "../../components/embla/css/sandbox.css";
import "../../components/embla/css/embla.css";

const PortfolioPage: React.FC = () => {
  const [workCardsDetails, setWorkCardsDetails] = useState([
    {
      title: "",
      imageUrl: "",
    },
    {
      title: "",
      imageUrl: "",
    },
    {
      title: "",
      imageUrl: "",
    },
    {
      title: "",
      imageUrl: "",
    },
    {
      title: "",
      imageUrl: "",
    },
  ]);

  const slides = workCardsDetails.map((cardDetail, index) => (
    <Box key={index} sx={{ padding: 2, flex: "0 0 100%" }}>
      <WorkCard title={cardDetail.title} imageUrl={cardDetail.imageUrl} />
    </Box>
  ));

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      style={{ overflowY: "hidden" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          mt: 24,
        }}
        style={{ overflowY: "hidden" }}
      >
        <Typography
          sx={{ fontSize: "64px", lineHeight: "77.45px", weight: 500 }}
        >
          Our work
        </Typography>
        <EmblaCarousel slides={slides} />
      </Box>
      <Card
        variant="outlined"
        sx={{
          mt: 8,
          width: "90%",
          height: "90vw",
          border: "1px solid #000",
          borderRadius: "16px",
          boxShadow: "0px 4px 4px 0px #00000040",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Skeleton
            animation="wave"
            variant="rectangular"
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "12px",
              border: "1px solid #000",
              backgroundColor: "primary.dark",
              opacity: "0px",
            }}
          />
        </CardContent>
      </Card>
      <ContactUs />
    </Box>
  );
};

export default PortfolioPage;
