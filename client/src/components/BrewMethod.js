import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBrewMethod } from "../features/brewMethodSlice";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

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
    <Grid container justifyContent="center" spacing={2}>
      {brewMethods.map((method, index) => {
        return (
          <Grid item xs={4} md={4} key={index}>
            <Button
              className="brewMethod"
              onClick={() => dispatch(setBrewMethod(method))}
              variant="contained"
              color={brewMethod === method ? "primary" : "inherit"}
            >
              <img
                src={loadAvatar(method)}
                alt={method}
                className="brewMethodImage"
                width={100}
                height={100}
              />
              {method}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default BrewMethod;
