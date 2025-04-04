import React, { useState, useEffect } from "react";
import alarmSound from "../assets/alarm.mp3"; // Import the alarm sound

const PomodoroTimer = () => {
  const modes = {
    focus: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 30 * 60,
  };

  const [timeLeft, setTimeLeft] = useState(modes.focus);
  const [isRunning, setIsRunning] = useState(false);
  const [activeMode, setActiveMode] = useState("focus");

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      playAlarm();
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const playAlarm = () => {
    const audio = new Audio(alarmSound);
    audio.play();
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleModeChange = (mode) => {
    setIsRunning(false);
    setActiveMode(mode);
    setTimeLeft(modes[mode]);
  };

  return (
    <div className="pomodoro-container">
      <h2>Pomodoro Timer ⏳</h2>

      {/* Mode Selection Buttons */}
      <div className="mode-buttons">
        <button 
          onClick={() => handleModeChange("focus")} 
          className={activeMode === "focus" ? "active" : ""}
        >
          Focus
        </button>
        <button 
          onClick={() => handleModeChange("shortBreak")} 
          className={activeMode === "shortBreak" ? "active" : ""}
        >
          Short Break
        </button>
        <button 
          onClick={() => handleModeChange("longBreak")} 
          className={activeMode === "longBreak" ? "active" : ""}
        >
          Long Break
        </button>
      </div>

      {/* Timer Display */}
      <h1>{formatTime(timeLeft)}</h1>

      {/* Control Buttons */}
      <div className="timer-buttons">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={() => handleModeChange(activeMode)}>Reset</button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
