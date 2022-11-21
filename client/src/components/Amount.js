import React from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { setAmount } from "../features/amountSlice";

function Amount() {
  const Amount = useSelector((state) => state.amount.weight);
  const dispatch = useDispatch();

  return (
    <TextField
      sx={{
        width: 300,
      }}
      className="Amount"
      type="text"
      label="Amount"
      value={Amount}
      onChange={(e) => dispatch(setAmount(e.target.value))}
    />
  );
}

export default Amount;
