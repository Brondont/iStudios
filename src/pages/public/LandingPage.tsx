import React from "react";
import { Box, Typography, Button } from "@mui/material";

import ServiceCard from "../../components/serviceCard/ServiceCard";
import WorkCard from "../../components/wordCard/WorkCard";
import UserReviewCard from "../../components/userReviewCard/userReviewCard";
import ContactUs from "../../components/contactUs/ContactUs";

import computerImage from "../../public/images/computer.png";

const LandingPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
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
            position: "absolute",
            top: "45%",
            zIndex: 2,
            left: "57%",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: 500,
              lineHeight: "36.31px",
              textAlign: "center",
            }}
          >
            Elevate Your
          </Typography>
          <Typography
            sx={{
              fontSize: "48px",
              fontWeight: 500,
              lineHeight: "58.09px",
              textAlign: "center",
            }}
          >
            Digital Presence
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: 500,
              lineHeight: "36.31px",
              textAlign: "center",
            }}
          >
            With iStudios
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "primary.dark",
              color: "primary.main",
              width: "613px",
              height: "80px",
              fontSize: "40px",
              lineHeight: "48.41px",
              borderRadius: "16px",
            }}
          >
            Book a free consultation now
          </Button>
        </Box>
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
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            mt: 10,
          }}
        >
          <Typography
            sx={{ fontSize: "64px", lineHeight: "77.45px", weight: 500 }}
          >
            Our services
          </Typography>
          <Box
            sx={{
              mt: 4,
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <ServiceCard
              title="Digital marketing"
              description="SEO, PPC, social media"
            />
            <ServiceCard
              title="Content marketing"
              description="Social media posts & strategies"
            />
            <ServiceCard
              title="Web design & dev"
              description="UI/UX designs, websites"
            />
            <ServiceCard
              title="Branding & creative services"
              description="Identity, social media designs..."
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            mt: 10,
          }}
        >
          <Typography
            sx={{ fontSize: "64px", lineHeight: "77.45px", weight: 500 }}
          >
            Our work
          </Typography>
          <Box
            sx={{
              mt: 4,
              display: "flex",
              gap: "40px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <WorkCard title="" imageUrl="" />
            <WorkCard title="" imageUrl="" />
            <WorkCard title="" imageUrl="" />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            mt: 10,
          }}
        >
          <Typography
            sx={{ fontSize: "64px", lineHeight: "77.45px", weight: 500 }}
          >
            Reviews
          </Typography>
          <Box
            sx={{
              mt: 4,
              display: "flex",
              gap: "40px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <UserReviewCard username="" userReview="" profileImageUrl="" />
            <UserReviewCard username="" userReview="" profileImageUrl="" />
          </Box>
        </Box>
        <ContactUs />
      </Box>
    </Box>
  );
};

export default LandingPage;
