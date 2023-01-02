import React from "react";
const Timer = ({ times }) => {
  return (
    <div>
      {times.map((time, index) => {
        return (
          <div key={`${time}${index}`}>
            <h2>{`${time.time}s`}</h2>
            <h2>{`${time.pour}g`}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default Timer;
