import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";

const ContactUs: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontSize: "64px", lineHeight: "77.45px", weight: 500 }}>
        Contact us
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: "24px", mt: 8 }}
      >
        <TextField
          label="Full name"
          InputLabelProps={{
            style: {
              fontSize: "24px",
              lineHeight: "29.05px",
            },
          }}
          InputProps={{
            style: {
              fontSize: "24px",
              lineHeight: "29.05px",
              borderRadius: "16px",
              width: "522px",
            },
          }}
        />
        <TextField
          label="E-mail"
          InputLabelProps={{
            style: {
              fontSize: "24px",
              lineHeight: "29.05px",
            },
          }}
          InputProps={{
            style: {
              fontSize: "24px",
              lineHeight: "29.05px",
              borderRadius: "16px",
              width: "522px",
            },
          }}
        />
        <TextField
          label="How can we help you ?"
          InputLabelProps={{
            style: {
              fontSize: "24px",
              lineHeight: "29.05px",
            },
          }}
          InputProps={{
            style: {
              fontSize: "24px",
              lineHeight: "29.05px",
              borderRadius: "16px",
              width: "522px",
            },
          }}
          multiline
          rows={4}
        />
        <Button
          variant="contained"
          sx={{
            width: "522px",
            height: "56px",
            padding: "10px",
            gap: "10px",
            borderRadius: "16px",
            fontSize: "30px",
            lineHeight: "36.31px",
          }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
