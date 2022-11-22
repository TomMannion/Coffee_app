import React from "react";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { useSelector, useDispatch } from "react-redux";
import { setAmount } from "../features/amountSlice";

function Amount() {
  const Amount = useSelector((state) => state.amount.weight);
  const dispatch = useDispatch();

  return (
    // <TextField
    //   className="Coffee Amount"
    //   type="text"
    //   label="Amount"
    //   value={Amount}
    //   onChange={(e) => dispatch(setAmount(e.target.value))}
    //   endAdornment={<InputAdornment position="end">g</InputAdornment>}
    // />
    <FormControl variant="outlined">
      <OutlinedInput
        sx={{ width: 120 }}
        className="Coffee Amount"
        type="text"
        value={Amount}
        onChange={(e) => dispatch(setAmount(e.target.value))}
        endAdornment={<InputAdornment position="end">g</InputAdornment>}
      />
      <FormHelperText>Amount of coffee</FormHelperText>
    </FormControl>
  );
}

export default Amount;
