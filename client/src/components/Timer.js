import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const Timer = () => {
  const [timer, setTimer] = useState(["1", "1", "1"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const isRunningRef = useRef(isRunning);
  const timerRef = useRef(timer);
  const currentIndexRef = useRef(currentIndex);

  const startTimer = () => {
    if (isRunningRef.current) {
      isRunningRef.current = false;
    } else {
      isRunningRef.current = true;
    }
    setIsRunning(isRunningRef.current);
  };

  function updateTimer() {
    if (currentIndexRef.current < timerRef.current.length) {
      const newTimer = timerRef.current;
      const newCurrentIndex = currentIndexRef.current;
      newTimer[newCurrentIndex] = newTimer[newCurrentIndex] - 1;
      timerRef.current = newTimer;
      setTimer([...newTimer]);
      if (newTimer[newCurrentIndex] === 0) {
        currentIndexRef.current = newCurrentIndex + 1;
        setCurrentIndex(newCurrentIndex + 1);
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunningRef.current) {
        return;
      }
      updateTimer();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  return (
    <div className="Timer">
      <Grid container spacing={2} justifyContent="center">
        {timer.map((time, index) => (
          <Grid
            key={"time" + index}
            item
            xs={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "5px",
              borderRadius: "50%",
              background: currentIndex > index ? "red" : "pink",
              width: "60px",
              height: "60px",
            }}
          >
            {time}
          </Grid>
        ))}
      </Grid>
      <button
        onClick={() => {
          startTimer();
        }}
      >
        Start
      </button>
    </div>
  );
};

export default Timer;
