import React from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";

interface OfferCardProps {
  title: string;
  description: string;
  link: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ title, description, link }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: "300px",
        minHeight: "339px",
        border: "1px solid #000",
        borderRadius: "16px",
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography
          sx={{ fontSize: "30px", lineHeight: "36.31px", fontWeight: 500 }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: "24px", lineHeight: "29.05px" }}>
          {description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: "200px",
            height: "68px",
            borderRadius: "16px",
            p: "16px 32px",
            fontSize: "30px",
            lineHeight: "36.31px",
            backgroundColor: "primary.dark",
            color: "primary.main",
            mt: "auto",
          }}
        >
          Get Offer
        </Button>
      </CardContent>
    </Card>
  );
};

export default OfferCard;
