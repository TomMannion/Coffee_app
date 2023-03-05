import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBrewMethod } from "../features/brewMethodSlice";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { width } from "@mui/system";
import syphon from "../assets/syphon.svg";
import aeropress from "../assets/aeropress.svg";
import chemex from "../assets/chemex.svg";
import frenchPress from "../assets/french-press.svg";
import v60 from "../assets/v60.svg";
import batchBrew from "../assets/batch-brew.svg";
import mokaPot from "../assets/moka-pot.svg";
import dripPot from "../assets/drip-pot.svg";
import coldBrew from "../assets/cold-brew.svg";
import espresso from "../assets/espresso.svg";
import defaultImg from "../assets/default.svg";

function BrewMethod() {
  const brewMethod = useSelector((state) => state.brewMethod.value);
  const dispatch = useDispatch();
  const brewMethods = [
    "aeropress",
    "chemex",
    "batch brew",
    "syphon",
    "moka pot",
    "french press",
    "pour over",
    "drip pot",
    "cold brew",
    "espresso",
  ];

  const loadAvatar = (brewMethod) => {
    // load avatar based on brew method from assets folder
    brewMethod = brewMethod.toLowerCase();
    switch (brewMethod) {
      case "aeropress":
        return aeropress;
      case "chemex":
        return chemex;
      case "batch brew":
        return batchBrew;
      case "syphon":
        return syphon;
      case "moka pot":
        return mokaPot;
      case "french press":
        return frenchPress;
      case "pour over":
        return v60;
      case "drip pot":
        return dripPot;
      case "cold brew":
        return coldBrew;
      case "espresso":
        return espresso;
      default:
        return defaultImg;
    }
  };

  return (
    // loop over brewMethods array and create a Grid item for each with a button and an image inside
    <Grid
      container
      spacing={2}
      justifyContent="center"
      style={{ paddingLeft: "22px", paddingTop: "16px" }}
    >
      {brewMethods.map((method, index) => {
        return (
          <Grid item xs={6} md={4} key={index}>
            <Button
              className="brewMethod"
              style={{ width: "150px", height: "150px" }}
              onClick={() => dispatch(setBrewMethod(method))}
              variant="contained"
              color={brewMethod === method ? "primary" : "inherit"}
            >
              <Grid container>
                <Grid item xs={12}>
                  <img
                    src={loadAvatar(method)}
                    alt={method}
                    className="brewMethodImage"
                    width={80}
                    height={80}
                  />
                </Grid>
                <Grid item xs={12}>
                  {method}
                </Grid>
              </Grid>
            </Button>
          </Grid>
        );
      })}
      <Grid
        item
        xs={6}
        style={{
          paddingTop: "30px",
        }}
      >
        <div style={{ paddingBottom: "10px" }}>Can't see it? Add your own!</div>
        <TextField
          autoFocus
          className="brewMethod"
          label="Other Methods"
          value={brewMethod}
          onChange={(e) => dispatch(setBrewMethod(e.target.value))}
        />
      </Grid>
    </Grid>
  );
}

export default BrewMethod;
