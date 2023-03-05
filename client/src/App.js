import "./App.css";
import "./components/theme.css";
import TestForm from "./components/TestForm";
import CoffeeGroup from "./components/CoffeeGroup";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "monospace",
      textTransform: "none",
      fontSize: 16,
    },
  },
  palette: {},
});

function App() {
  return (
    <div className="App yellowbg">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<CoffeeGroup />} />
          <Route path="/post" element={<TestForm />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
