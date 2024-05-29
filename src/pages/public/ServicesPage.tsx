import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import ServiceCard from "../../components/serviceCard/ServiceCard";
import ServicesDetails from "../../components/servicesDetails/ServicesDetails";
import ContactUs from "../../components/contactUs/ContactUs";

const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState("Digital");
  // Digital
  // Content
  // Web
  // Branding

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          mt: 24,
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
            onSelect={() => handleServiceSelect("Digital")}
            selected={selectedService === "Digital"}
          />
          <ServiceCard
            title="Content marketing"
            description="Social media posts & strategies"
            onSelect={() => handleServiceSelect("Content")}
            selected={selectedService === "Content"}
          />
          <ServiceCard
            title="Web design & dev"
            description="UI/UX designs, websites"
            onSelect={() => handleServiceSelect("Web")}
            selected={selectedService === "Web"}
          />
          <ServiceCard
            title="Branding & creative services"
            description="Identity, social media designs..."
            onSelect={() => handleServiceSelect("Branding")}
            selected={selectedService === "Branding"}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 6,
        }}
      >
        <ServicesDetails selectedService={selectedService} />
      </Box>
      <ContactUs />
    </Box>
  );
};

export default ServicesPage;
