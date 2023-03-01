import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { setAmount } from "../features/amountSlice";
import { useState } from "react";
import { Grid } from "@mui/material";

function Amount() {
  const Amount = useSelector((state) => state.amount.value);
  const dispatch = useDispatch();
  const [popularAmounts, setPopularAmounts] = useState(["15", "16", "20"]);

  return (
    <Grid container justifyContent="center" spacing={2}>
      {popularAmounts.map((amountPop, index) => {
        return (
          <Grid item xs={4}>
            <Button
              key={index}
              variant="contained"
              onClick={() => dispatch(setAmount(amountPop))}
              color={Amount === amountPop ? "primary" : "inherit"}
              sx={{ width: "100%", height: "100%" }}
            >
              {amountPop}
            </Button>
          </Grid>
        );
      })}
      <Grid item xs={6}>
        <FormControl variant="outlined">
          <OutlinedInput
            sx={{ width: "100%" }}
            className="Coffee Amount"
            type="text"
            value={Amount}
            onChange={(e) => dispatch(setAmount(e.target.value))}
            endAdornment={<InputAdornment position="end">g</InputAdornment>}
          />
          <FormHelperText>Amount of coffee</FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default Amount;
