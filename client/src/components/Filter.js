import React from "react";
// import { makeStyles } from "@mui/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./CardGroup.css";
import "./theme.css";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "monospace",
      textTransform: "none",
      fontSize: 16,
      color: "white",
      backgroundColor: "black",
    },
  },
  palette: {
    // when active make text white
    primary: {
      main: "#fff",
    },
  },
});

export default function Filter(props) {
  // const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <FormControl variant="outlined" className="filter">
        <InputLabel id="filter" style={{ backgroundColor: "transparent" }}>
          {props.label}
        </InputLabel>
        <Select
          onChange={(event) => {
            props.setData(event.target.value);
          }}
          sx={{ color: "white" }}
        >
          <MenuItem
            value={""}
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <em>All</em>
          </MenuItem>
          {props.data.map((item, index) => {
            return (
              <MenuItem
                key={index}
                value={item}
                sx={{ backgroundColor: "white", color: "black" }}
              >
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}
