import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWaterTemp } from "../features/waterTempSlice";

function WaterTemp() {
  const waterTemp = useSelector((state) => state.waterTemp.value);
  const dispatch = useDispatch();
  const [popularWaterTemps, setPopularWaterTemps] = useState([
    "100",
    "95",
    "92",
  ]);

  return (
    <Grid container justifyContent="center" spacing={2}>
      {popularWaterTemps.map((waterTempPop, index) => {
        return (
          <Grid item xs={4} key={index}>
            <Button
              variant="contained"
              onClick={() => dispatch(setWaterTemp(waterTempPop))}
              color={waterTemp === waterTempPop ? "primary" : "inherit"}
              sx={{ width: "100%", height: "100%" }}
            >
              {waterTempPop}
            </Button>
          </Grid>
        );
      })}
      <Grid item xs={6}>
        <TextField
          className="WaterTemp"
          type="text"
          label="Water Temperature"
          value={waterTemp}
          onChange={(e) => dispatch(setWaterTemp(e.target.value))}
        />
      </Grid>
    </Grid>
  );
}

export default WaterTemp;
