import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBrewMethod } from "../features/brewMethodSlice";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { width } from "@mui/system";

function BrewMethod() {
  const brewMethod = useSelector((state) => state.brewMethod.value);
  const dispatch = useDispatch();
  const brewMethods = [
    "aeropress",
    "chemex",
    "batch brew",
    "siphon",
    "moka pot",
    "french press",
    "pour over",
  ];

  const loadAvatar = (brewMethod) => {
    // load avatar based on brew method from assets folder
    switch (brewMethod) {
      case "aeropress":
        return require("../assets/Aeropress.png");
      case "chemex":
        return require("../assets/Chemex.png");
      case "french press":
        return require("../assets/french-press.png");
      case "pour over":
        return require("../assets/pour-over.png");
      case "batch brew":
        return require("../assets/batch-brew.png");
      case "siphon":
        return require("../assets/siphon.png");
      case "moka pot":
        return require("../assets/moka-pot.png");
      default:
        return require("../assets/Aeropress.png");
    }
  };

  return (
    // loop over brewMethods array and create a Grid item for each with a button and an image inside
    <Grid
      container
      spacing={2}
      justifyContent="center"
      style={{ padding: "20px" }}
    >
      {brewMethods.map((method, index) => {
        return (
          <Grid item xs={6} md={4} key={index}>
            <Button
              className="brewMethod"
              onClick={() => dispatch(setBrewMethod(method))}
              variant="contained"
              sx={{ width: "100%", height: "100%" }}
              color={brewMethod === method ? "primary" : "inherit"}
            >
              <Grid container justifyContent="center">
                <Grid item xs={12}>
                  <img
                    src={loadAvatar(method)}
                    alt={method}
                    className="brewMethodImage"
                    width={100}
                    height={100}
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
        md={4}
        style={{
          paddingTop: "30px",
        }}
      >
        <TextField
          className="brewMethod"
          label="Other"
          value={brewMethod}
          onChange={(e) => dispatch(setBrewMethod(e.target.value))}
        />
      </Grid>
    </Grid>
  );
}

export default BrewMethod;
