import React from "react";
import { NavLink } from "react-router-dom";

import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Button,
  ButtonProps,
  styled,
  Theme,
} from "@mui/material";

const CustomButton = styled(Button)<ButtonProps>(
  ({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: "36px",
    fontWeight: "400",
    fontSize: "24px",
    padding: "10px 16px",
    lineHeight: "29.05px",
    minHeight: "30px",
  })
);

const Navbar: React.FC = () => {
  return (
    <AppBar
      sx={{
        width: "100%",
        position: "fixed",
        backgroundColor: "transparent",
        boxShadow: "none",
        padding: "24px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            backgroundColor: (theme) => theme.palette.primary.light,
            borderRadius: "67px",
            gap: "40px",
          }}
          style={{
            padding: "8px",
            minHeight: "unset",
          }}
        >
          <CustomButton>Services</CustomButton>
          <CustomButton>Portfolio</CustomButton>
          <CustomButton>iStudios</CustomButton>
          <CustomButton>About Us</CustomButton>
          <CustomButton>Contact us</CustomButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
