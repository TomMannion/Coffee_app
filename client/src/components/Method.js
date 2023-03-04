import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { addToStepArray, setIndividualStep } from "../features/methodSlice";
import { useState } from "react";
import { useEffect } from "react";

function Method() {
  const method = useSelector((state) => state.method.value);
  const dispatch = useDispatch();

  return (
    // for each step in the method, create a text field if steps is not empty else create a text field with a placeholder
    <Grid container spacing={1} justifyContent="center">
      Please enter the steps to make your recipe.
      {method.map((step, index) => {
        return (
          <Grid item xs={12} key={index}>
            <TextField
              className="method"
              type="text"
              label={`Step ${index + 1}`}
              value={step}
              onChange={(e) => {
                dispatch(
                  setIndividualStep({
                    index: index,
                    step: e.target.value,
                  })
                );
              }}
            />
          </Grid>
        );
      })}
      {/*add a button to add new steps */}
      <Grid item xs={12}>
        <Button
          variant="outlined"
          onClick={() => {
            dispatch(addToStepArray());
          }}
        >
          Add Step
        </Button>
      </Grid>
    </Grid>
  );
}

export default Method;
