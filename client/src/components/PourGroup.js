import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import { useSelector, useDispatch } from "react-redux";
import { setIndividualPour } from "../features/pourGroupSlice";

function PourGroup() {
  const pourGroup = useSelector((state) => state.pourGroup.value);
  const dispatch = useDispatch();

  return (
    <Grid container className="pourGroup" justifyContent="center" spacing={2}>
      {pourGroup.map((pour, index) => {
        return (
          <Grid container item key={index} spacing={1}>
            <Grid item xs={6}>
              <TextField
                className="pourWeight"
                type="text"
                label="Pour Weight"
                value={pour.pourWeight}
                onChange={(e) =>
                  dispatch(
                    setIndividualPour({
                      index: index,
                      pour: e.target.value,
                    })
                  )
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className="pourTime"
                type="text"
                label="Pour Time"
                value={pour.pourTime}
                onChange={(e) =>
                  dispatch(
                    setIndividualPour({
                      index: index,
                      time: e.target.value,
                    })
                  )
                }
              />
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default PourGroup;
