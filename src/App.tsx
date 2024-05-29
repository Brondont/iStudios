import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource/inter";
import "./App.css";

// local imports
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import LandingPage from "./pages/public/LandingPage";
import NotFoundPage from "./pages/public/NotFoundPage";
import ServicesPage from "./pages/public/ServicesPage";
import PortfolioPage from "./pages/public/PortfolioPage";
import ContactUs from "./components/contactUs/ContactUs";
import AboutUsPage from "./pages/public/AboutUsPage";

// global site theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      light: "#E3E3E3",
      dark: "#ABABAB",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    button: {
      textTransform: "none",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <Box sx={{ width: "100%" }}>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/services" element={<ServicesPage />}></Route>
            <Route path="/portfolio" element={<PortfolioPage />}></Route>
            <Route path="/contact" element={<ContactUs />}></Route>
            <Route path="/about" element={<AboutUsPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </Box>
        {/* footer */}
        <Box
          sx={{
            width: "100%",
            height: "40vh",
            backgroundColor: "primary.main",
            color: "primary.contrastText",
          }}
        ></Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
