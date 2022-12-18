import React, { useState, useRef, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";

import Button from "@mui/material/Button";

const Timer = ({ times }) => {
  const [timer, setTimer] = useState(times.map((time) => Number(time.time)));
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

  const resetTimer = () => {
    setTimer(times.map((time) => Number(time.time)));
    setCurrentIndex(0);
    currentIndexRef.current = 0;
    isRunningRef.current = true;
    setIsRunning(isRunningRef.current);
    timerRef.current = times.map((time) => Number(time.time));
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
  }, timer);

  // const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  return (
    <div className="Timer">
      <Grid container spacing={2} justifyContent="center" pb={2}>
        {timer.map((time, index) => (
          <Grid container justifyContent="center" xs={3} mb={2}>
            <Grid
              key={"time" + index}
              item
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // borderRadius: "50%",
                background: `linear-gradient(90deg, rgba(231,143,143,1) ${
                  100 - (100 / times[index].time) * time
                }%, rgba(140,237,148,1) ${
                  100 - (100 / times[index].time) * time
                }%)`,
                width: "100%",
                height: "45px",
              }}
            >
              {time}s
            </Grid>
            <div>{times[index].pour}g</div>
          </Grid>
        ))}
      </Grid>
      {isRunning ? (
        <Button variant="outlined" onClick={startTimer}>
          START
        </Button>
      ) : (
        <Button variant="contained" onClick={startTimer}>
          PAUSE
        </Button>
      )}
      <Button variant="contained" onClick={resetTimer}>
        RESET
      </Button>
    </div>
  );
};

export default Timer;
