import React from "react";
import { NavLink, NavLinkProps, useLocation } from "react-router-dom";

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
    transition: "background-color 0.3s ease",
    "&.active": {
      backgroundColor: theme.palette.primary.light,
    },
  })
);

const NavButton: React.FC<NavLinkProps & ButtonProps> = (props) => {
  return <CustomButton component={NavLink} {...props} />;
};

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/services", text: "Services" },
    { to: "/portfolio", text: "Portfolio" },
    { to: "/", text: "iStudios" },
    { to: "/about", text: "About Us" },
    { to: "/contact", text: "Contact us" },
  ];

  const activeLinkIndex = navLinks.findIndex(
    (link) => link.to === location.pathname
  );

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
        {activeLinkIndex > 0 && (
          <Toolbar
            sx={{
              display: "flex",
              backgroundColor: (theme) => theme.palette.primary.light,
              borderRadius: "67px",
              gap: "40px",
              mr: "32px",
            }}
            style={{
              padding: "8px",
              minHeight: "unset",
            }}
          >
            {navLinks.slice(0, activeLinkIndex).map((link) => (
              <NavButton key={link.to} to={link.to}>
                {link.text}
              </NavButton>
            ))}
          </Toolbar>
        )}
        <Toolbar
          style={{
            padding: "unset",
            minHeight: "unset",
          }}
        >
          <NavButton to={location.pathname}>
            {navLinks[activeLinkIndex]?.text}
          </NavButton>
        </Toolbar>
        {activeLinkIndex < navLinks.length - 1 && (
          <Toolbar
            sx={{
              display: "flex",
              backgroundColor: (theme) => theme.palette.primary.light,
              borderRadius: "67px",
              gap: "40px",
              ml: "32px",
            }}
            style={{
              padding: "8px",
              minHeight: "unset",
            }}
          >
            {navLinks.slice(activeLinkIndex + 1).map((link) => (
              <NavButton key={link.to} to={link.to}>
                {link.text}
              </NavButton>
            ))}
          </Toolbar>
        )}
      </Container>
    </AppBar>
  );
};

export default Navbar;
