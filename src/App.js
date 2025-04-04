import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Pomodoro from "./pages/Pomodoro";
import CustomTimer from "./pages/CustomTimer";
import Stopwatch from "./pages/Stopwatch";
import MusicPlayer from "./components/MusicPlayer";
import BackgroundSelector from "./components/BackgroundSelector";
import defaultBg from "./assets/default.jpg";
import "./App.css";

function App() {
  const [background, setBackground] = useState(defaultBg);

  const handleBackgroundChange = (bgImage) => {
    setBackground(bgImage);
  };

  return (
    <Router>
      <div
        className="app-container"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background 0.5s ease-in-out",
        }}
      >
        <nav className="navbar">
          <Link to="/">Home</Link> | 
          <Link to="/pomodoro">Pomodoro</Link> | 
          <Link to="/custom">Custom Timer</Link> | 
          <Link to="/stopwatch">Stopwatch</Link>
        </nav>
        
        <h1 className="studyhaven-title">StudyHaven</h1>
        
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pomodoro" element={<Pomodoro />} />
            <Route path="/custom" element={<CustomTimer />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
          </Routes>
        </div>
        
        <div className="bottom-bar">
          <div className="music-section">
            <MusicPlayer />
          </div>
          <div className="background-section">
            <BackgroundSelector onBackgroundChange={handleBackgroundChange} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;