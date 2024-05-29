import React from "react";
import { Box } from "@mui/material";

const NotFoundPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "90vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      404 Not Found.
    </Box>
  );
};

export default NotFoundPage;
