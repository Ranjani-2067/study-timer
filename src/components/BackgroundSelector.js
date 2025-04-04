import React, { useState } from "react";
import defaultBg from "../assets/default.jpg";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";

const backgrounds = [
  { id: 0, name: "Default", image: defaultBg },
  { id: 1, name: "Blue", image: bg1 },
  { id: 2, name: "Sunset", image: bg2 },
  { id: 3, name: "Night", image: bg3 },
];

const BackgroundSelector = ({ onBackgroundChange }) => {
  const [selectedBg, setSelectedBg] = useState(0); // Default selection is "Default"

  const handleChange = (bg) => {
    setSelectedBg(bg.id); // Track selected background
    onBackgroundChange(bg.image);
  };

  return (
    <div className="background-selector">
      <h3>Select Background 🌄</h3>
      <div className="bg-buttons">
        {backgrounds.map((bg) => (
          <button
            key={bg.id}
            onClick={() => handleChange(bg)}
            className={selectedBg === bg.id ? "selected" : ""}
          >
            {bg.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BackgroundSelector;
