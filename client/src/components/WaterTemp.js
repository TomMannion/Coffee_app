import React from "react";
import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
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
        <FormControl variant="outlined">
          <OutlinedInput
            sx={{ width: "100%" }}
            className="Water temp"
            type="text"
            value={waterTemp}
            onChange={(e) => dispatch(setWaterTemp(e.target.value))}
            endAdornment={<InputAdornment position="end">°C</InputAdornment>}
          />
          <FormHelperText>Temp of the water</FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default WaterTemp;
