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
        return require("../assets/aeropress.svg");
      case "chemex":
        return require("../assets/chemex.svg");
      case "french press":
        return require("../assets/french-press.svg");
      case "pour over":
        return require("../assets/v60.svg");
      case "batch brew":
        return require("../assets/batch-brew.svg");
      case "siphon":
        return require("../assets/siphon.svg");
      case "moka pot":
        return require("../assets/moka-pot.svg");
      default:
        return require("../assets/eropress.png");
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
          <Grid item xs={6} key={index}>
            <Button
              className="brewMethod"
              style={{ width: "130px", height: "130px" }}
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
