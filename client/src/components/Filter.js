import React from "react";
// import { makeStyles } from "@mui/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./CardGroup.css";

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     minWidth: 230,
//     minHeight: 50,
//     marginBottom: 20,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

export default function Filter(props) {
  // const classes = useStyles();

  return (
    <FormControl variant="outlined" className="filter" hiddenLabel>
      <InputLabel
        id="filter"
        style={{
          backgroundColor: "#fcdbdb",
          paddingLeft: "3px",
          paddingRight: "3px",
        }}
      >
        {props.label}
      </InputLabel>
      <Select
        onChange={(event) => {
          props.setData(event.target.value);
        }}
      >
        <MenuItem value={""}>
          <em>All</em>
        </MenuItem>
        {props.data.map((item, index) => {
          return (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
