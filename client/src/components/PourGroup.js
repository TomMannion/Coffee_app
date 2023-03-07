import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { setIndividualPour } from "../features/pourGroupSlice";
import { useEffect, useState } from "react";
import { FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function PourGroup() {
  // map over the pourGroup array and create a text field for weight and time
  const pourGroup = useSelector((state) => state.pourGroup.value);
  const dispatch = useDispatch();

  return (
    <Grid container justifyContent="center" spacing={2}>
      {pourGroup.map((pour, index) => {
        return (
          <Grid item xs={12} key={"pour" + index}>
            <div>POUR {index + 1}</div>
            {console.log(pour)}
            <FormControl variant="outlined" sx={{ paddingX: "2px" }}>
              <OutlinedInput
                key={"weight" + index}
                variant="outlined"
                type="number"
                value={pour.pour}
                onChange={(e) =>
                  dispatch(
                    setIndividualPour({
                      index: index,
                      pour: e.target.value,
                      time: pour.time,
                    })
                  )
                }
                endAdornment={
                  <InputAdornment position="end">Grams</InputAdornment>
                }
              />
            </FormControl>
            <FormControl variant="outlined" sx={{ paddingX: "2px" }}>
              <OutlinedInput
                key={"time" + index}
                variant="outlined"
                type="number"
                value={pour.time}
                onChange={(e) =>
                  dispatch(
                    setIndividualPour({
                      index: index,
                      pour: pour.pour,
                      time: e.target.value,
                    })
                  )
                }
                endAdornment={
                  <InputAdornment position="end">Seconds</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default PourGroup;
