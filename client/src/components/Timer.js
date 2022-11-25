import React, { useState, useRef, useEffect } from "react";

const Timer = () => {
  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed

  // The state for our timer
  const [timer, setTimer] = useState(["20", "30", "10"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunningRef.current) {
        return;
      }
      updateTimer();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Timer">
      {timer.map((time, index) => (
        <div key={time + `${index}`}>{time}</div>
      ))}
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
