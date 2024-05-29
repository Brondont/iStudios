import React from "react";
import { Card, CardContent, Typography, Link } from "@mui/material";

interface ServiceCardProps {
  title: string;
  description: string;
  onSelect?: () => void;
  selected?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  onSelect,
  selected,
}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: "300px",
        border: "1px solid #000",
        borderRadius: "16px",
        boxShadow: selected
          ? "0px 4px 4px 0px #00000040"
          : "0px 4px 4px 0px #00000025",

        backgroundColor: selected ? "#00000008" : "#fff",
      }}
    >
      <CardContent
        sx={{ display: "flex", flexDirection: " column", height: "100%" }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            lineHeight: "36.31px",
            weight: 500,
            mb: 2,
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: "24px", lineHeight: "29.05px" }}>
          {description}
        </Typography>
        {onSelect && (
          <Link
            sx={{
              alignSelf: "center",
              mt: "auto",
              fontSize: "20px",
              lineHeight: "24.2px",
              fontFamily: "Inter",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={onSelect}
          >{`View more ->`}</Link>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
