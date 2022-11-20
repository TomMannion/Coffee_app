import React from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { setIndividualPour } from "../features/pourGroupSlice";

function PourGroup() {
  const pourGroup = useSelector((state) => state.pourGroup.value);
  const dispatch = useDispatch();

  return (
    <div className="pourGroup">
      {pourGroup.map((pour, index) => {
        return (
          <div className="pour" key={index}>
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
          </div>
        );
      })}
    </div>
  );
}

export default PourGroup;
