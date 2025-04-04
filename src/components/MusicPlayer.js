import React, { useState } from "react";
import jazz from '../music/jazz.mp3'; // Import files directly
import sarod from '../music/sarod.mp3';
import white from '../music/white.mp3';

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  const tracks = [
    { name: "Lo-fi Jazz 🎵", src: jazz },
    { name: "Calm Sarod 🪕", src: sarod },
    { name: "White Noise ☁️", src: white },
  ];

  const playMusic = (src) => {
    if (currentTrack) {
      currentTrack.pause();
      currentTrack.currentTime = 0;
    }
    const audio = new Audio(src);
    audio.loop = true;
    audio.play()
      .then(() => setCurrentTrack(audio))
      .catch(error => console.error("Audio playback failed:", error));
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