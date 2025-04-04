import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  const startStopwatch = () => setRunning(true);
  const pauseStopwatch = () => setRunning(false);
  const resetStopwatch = () => {
    setRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch-container">
      <h2>Stopwatch ⏱</h2>
      <div className="timer-display">{formatTime(time)}</div>
      
      <div className="timer-buttons">
        <button onClick={startStopwatch}>Start</button>
        <button onClick={pauseStopwatch}>Pause</button>
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;