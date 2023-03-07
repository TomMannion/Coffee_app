import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setOrigin } from "../features/originSlice";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Form.css";

function Origin() {
  const origin = useSelector((state) => state.origin.value);
  const dispatch = useDispatch();
  const [popularOrigins, setPopularOrigins] = useState([
    "Ethiopia",
    "Brazil",
    "Colombia",
    "Guatemala",
    "Honduras",
    "Indonesia",
    "Kenya",
    "Mexico",
    "Nicaragua",
    "Peru",
    "Rwanda",
    "Tanzania",
    "Uganda",
    "Vietnam",
  ]);

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "monospace",
        textTransform: "none",
        fontSize: 16,
        color: "black",
      },
    },
    palette: {
      primary: {
        main: "#000000",
      },
    },
  });

  // make an array of emojis for each country
  const emoji = {
    Ethiopia: "🇪🇹",
    Brazil: "🇧🇷",
    Colombia: "🇨🇴",
    Guatemala: "🇬🇹",
    Honduras: "🇭🇳",
    Indonesia: "🇮🇩",
    Kenya: "🇰🇪",
    Mexico: "🇲🇽",
    Nicaragua: "🇳🇮",
    Peru: "🇵🇪",
    Rwanda: "🇷🇼",
    Tanzania: "🇹🇿",
    Uganda: "🇺🇬",
    Vietnam: "🇻🇳",
  };

  return (
    // Buttons for each of the most common countries for coffee
    <Grid container justifyContent="center" spacing={2}>
      {popularOrigins.map((originPop, index) => {
        return (
          <Grid item xs={4} key={originPop + index}>
            <Button
              key={index}
              variant="contained"
              onClick={() => dispatch(setOrigin(originPop))}
              //active not active classname
              className={originPop === origin ? "active" : "notactive"}
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                color: "#000",
                "&.active": { backgroundColor: "#FFE400" },
                border: "1px solid black",
              }}
            >
              {emoji[originPop]}
              {originPop}
            </Button>
          </Grid>
        );
      })}
      <Grid item xs={12} sx={{ width: "100%" }}>
        <ThemeProvider theme={theme}>
          <TextField
            className="origin"
            type="text"
            label="Enter a coffee origin"
            value={origin}
            onChange={(e) => dispatch(setOrigin(e.target.value))}
          />
        </ThemeProvider>
      </Grid>
    </Grid>
  );
}

export default Origin;
