import React, { useState } from "react";

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  const tracks = [
    { name: "Lo-fi Jazz 🎵", src: "/music/jazz.mp3" },
    { name: "Calm Sarod 🪕", src: "/music/sarod.mp3" },
    { name: "White Noise ☁️", src: "/music/white.mp3" },
  ];

  const playMusic = (src) => {
    if (currentTrack) {
      currentTrack.pause();
      currentTrack.currentTime = 0; // Ensure track resets
    }
    const audio = new Audio(src);
    audio.loop = true;
    audio.play();
    setCurrentTrack(audio);
  };
  

  const stopMusic = () => {
    if (currentTrack) {
      currentTrack.pause();
      setCurrentTrack(null);
    }
  };

  return (
    <div className="music-player">
      <h3 className="music-title">Select Background Music 🎶</h3>
      <div className="music-buttons">
        {tracks.map((track, index) => (
          <button key={index} onClick={() => playMusic(track.src)}>
            {track.name}
          </button>
        ))}
        {currentTrack && (
          <button className="stop-button" onClick={stopMusic}>⏹️ Stop Music</button>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;
