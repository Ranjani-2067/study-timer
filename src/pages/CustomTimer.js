import React, { useState, useEffect } from "react";
import alarmSound from "../assets/alarm.mp3";


const CustomTimer = () => {
  const [customMinutes, setCustomMinutes] = useState(5);
  const [timeLeft, setTimeLeft] = useState(customMinutes * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 1) {
            new Audio(alarmSound).play(); 
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running, timeLeft]);
  

  const startTimer = () => setRunning(true);
  const pauseTimer = () => setRunning(false);
  const resetTimer = () => {
    setRunning(false);
    setTimeLeft(customMinutes * 60);
  };

  const handleInputChange = (e) => {
    const minutes = parseInt(e.target.value, 10);
    setCustomMinutes(isNaN(minutes) ? 0 : minutes);
    setTimeLeft((isNaN(minutes) ? 0 : minutes) * 60);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="timer-container">
      <h2>Custom Timer ⏳</h2>
      <input
        type="number"
        value={customMinutes}
        onChange={handleInputChange}
        min="1"
        className="timer-input"
      />
      <div className="timer-display">{formatTime(timeLeft)}</div>
      
      <div className="timer-buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default CustomTimer;