import React from "react";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

// local imports
import Navbar from "./components/navbar/Navbar";

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
    fontFamily: "sans-serif",
    button: {
      textTransform: "none",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
};

export default App;
