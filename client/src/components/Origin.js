import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setOrigin } from "../features/originSlice";

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
          <Grid item xs={4}>
            <Button
              key={index}
              variant="contained"
              onClick={() => dispatch(setOrigin(originPop))}
              color={origin === originPop ? "primary" : "inherit"}
              sx={{ width: "100%", height: "100%" }}
            >
              {emoji[originPop]}
              {originPop}
            </Button>
          </Grid>
        );
      })}
      <Grid item xs={12} sx={{ width: "100%" }}>
        <TextField
          className="origin"
          type="text"
          label="Enter a coffee origin"
          value={origin}
          onChange={(e) => dispatch(setOrigin(e.target.value))}
        />
      </Grid>
    </Grid>
  );
}

export default Origin;
