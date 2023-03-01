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
      style={{ paddingLeft: "16px", paddingTop: "16px" }}
    >
      {brewMethods.map((method, index) => {
        return (
          <Grid item xs={6} key={index}>
            <Button
              className="brewMethod"
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
        <TextField
          autoFocus
          className="brewMethod"
          label="Other Method"
          value={brewMethod}
          onChange={(e) => dispatch(setBrewMethod(e.target.value))}
        />
      </Grid>
    </Grid>
  );
}

export default BrewMethod;
