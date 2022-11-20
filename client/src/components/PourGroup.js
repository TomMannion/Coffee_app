import React from "react";
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
            <input
              className="pourWeight"
              type="text"
              placeholder="Pour Weight"
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
            <input
              className="pourTime"
              type="text"
              placeholder="Pour Time"
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
