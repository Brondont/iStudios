import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource/inter";
import "./App.css";

// local imports
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/public/LandingPage";
import NotFoundPage from "./pages/public/NotFoundPage";

// global site theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      light: "#E3E3E3",
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
      <Box>
        <Navbar />
        <Box sx={{ height: "100vh", width: "100%" }}>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
