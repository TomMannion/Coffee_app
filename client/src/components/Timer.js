import React, { useState, useRef, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";

const Timer = ({ times }) => {
  const [timer, setTimer] = useState(
    times.map((time) => Number(time.pourTime))
  );
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
    setTimer(times.map((time) => Number(time.pourTime)));
    setCurrentIndex(0);
    currentIndexRef.current = 0;
    isRunningRef.current = true;
    setIsRunning(isRunningRef.current);
    timerRef.current = times.map((time) => Number(time.pourTime));
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
          <Grid
            container
            key={"time" + index}
            justifyContent="center"
            xs={3}
            mb={2}
          >
            <Grid
              item
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // borderRadius: "50%",
                background: `linear-gradient(90deg, rgba(0,0,0,0.62) ${
                  100 - (100 / times[index].pourTime) * time
                }%, rgba(0,0,0,0.20) ${
                  100 - (100 / times[index].pourTime) * time
                }%)`,
                width: "100%",
                height: "45px",
              }}
            >
              {time}s
            </Grid>
            <div>{times[index].pourWeight}g</div>
          </Grid>
        ))}
      </Grid>
      {isRunning ? (
        <Button
          className="start-button"
          variant="contained"
          onClick={startTimer}
          sx={{
            mr: 2,
            bgcolor: "rgba(206, 0, 0, 0.4)",
            "&:hover": {
              bgcolor: "rgba(206, 0, 0, 0.6)",
            },
          }}
        >
          START
        </Button>
      ) : (
        <Button
          className="pause-button"
          variant="contained"
          onClick={startTimer}
          sx={{
            mr: 2,
            bgcolor: "rgba(206, 0, 0, 0.4)",
            "&:hover": {
              bgcolor: "rgba(206, 0, 0, 0.6)",
            },
          }}
        >
          PAUSE
        </Button>
      )}
      <Button
        variant="contained"
        onClick={resetTimer}
        sx={{
          mr: 2,
          bgcolor: "rgba(206, 0, 0, 0.4)",
          "&:hover": {
            bgcolor: "rgba(206, 0, 0, 0.6)",
          },
        }}
      >
        RESET
      </Button>
    </div>
  );
};

export default Timer;
