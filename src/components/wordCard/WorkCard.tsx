import React from "react";
import { Card, CardContent, Typography, Box, Skeleton } from "@mui/material";

interface WorkCardProps {
  title: string;
  imageUrl: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, imageUrl }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: "400px",
        minHeight: "337px",
        border: "1px solid #000",
        borderRadius: "16px",
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      <CardContent>
        {title && imageUrl ? (
          <>
            <img src={imageUrl} alt="" />
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
          </>
        ) : (
          <>
            <Skeleton
              animation="wave"
              variant="rectangular"
              sx={{
                width: "366px",
                height: "240px",
                borderRadius: "12px",
                border: "1px solid #000",
                backgroundColor: "primary.dark",
                opacity: "0px",
              }}
            />
            <Skeleton
              animation="wave"
              variant="rectangular"
              sx={{
                mt: 4,
                width: "269px",
                height: "31px",
                backgroundColor: "primary.light",
              }}
            />
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default WorkCard;
