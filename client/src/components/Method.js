import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { setMethod } from "../features/methodSlice";
import { useState } from "react";

function Method() {
  const method = useSelector((state) => state.method.value);
  const [steps, setSteps] = useState(method);
  const dispatch = useDispatch();

  return (
    // for each step in the method, create a text field if steps is not empty else create a text field with a placeholder
    <Grid container spacing={1} justifyContent="center">
      Please enter the steps to make your recipe.
      {steps.length > 0 ? (
        steps.map((step, index) => {
          return (
            <Grid item xs={12} key={step + index}>
              <TextField
                className="method"
                type="text"
                label={`Step ${index + 1}`}
                value={step}
                onChange={(e) => {
                  const newSteps = [...steps];
                  newSteps[index] = e.target.value;
                  setSteps(newSteps);
                  dispatch(setMethod(newSteps));
                }}
              />
            </Grid>
          );
        })
      ) : (
        <Grid item xs={12}>
          <TextField
            className="method"
            type="text"
            label="Step 1"
            placeholder="Add a step"
            value={method}
            onChange={(e) => {
              const newSteps = [...steps];
              newSteps[0] = e.target.value;
              setSteps(newSteps);
              dispatch(setMethod(newSteps));
            }}
          />
        </Grid>
      )}
      {/*add a button to add new steps */}
      <Grid item xs={12}>
        <Button
          variant="outlined"
          onClick={() => {
            const newSteps = [...steps];
            newSteps.push("");
            setSteps(newSteps);
            dispatch(setMethod(newSteps));
          }}
        >
          Add Step
        </Button>
      </Grid>
    </Grid>
  );
}

export default Method;
