import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { setGrinder } from "../features/grinderSlice";
import { useState } from "react";

function Grinder() {
  const grinder = useSelector((state) => state.grinder.value);
  const dispatch = useDispatch();
  const [popularGrinders, setPopularGrinders] = useState([
    "1Zpresso JX-Pro",
    "Knock Feldgrind",
    "Comandante C40 MKIII Nitro Blade",
    "Niche Zero Grinder",
    "Timemore Chestnut C2",
    "Kinu M47 Phoenix",
    "BPlus Apollo",
    "Lido E-T",
    "Eureka Mignon Specialita",
    "Baratza Sette 270",
  ]);

  return (
    <Grid container justifyContent="center" spacing={2}>
      {popularGrinders.map((grinderPop, index) => {
        return (
          <Grid item xs={6} key={"grinder" + index}>
            <Button
              variant="contained"
              onClick={() => dispatch(setGrinder(grinderPop))}
              color={grinder === grinderPop ? "primary" : "inherit"}
              className={grinderPop === grinder ? "active" : "notactive"}
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                color: "#000",
                "&.active": { backgroundColor: "#FFE400" },
                border: "1px solid black",
              }}
            >
              {grinderPop}
            </Button>
          </Grid>
        );
      })}
      <Grid item xs={6}>
        <TextField
          className="grinder"
          type="text"
          label="Other Grinder"
          value={grinder}
          onChange={(e) => dispatch(setGrinder(e.target.value))}
        />
      </Grid>
    </Grid>
  );
}

export default Grinder;
