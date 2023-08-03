import { useState, useEffect, useRef } from 'react';

const AudioPlayer = ({ episode, onPlaybackChange }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    // Handle play/pause when the isPlaying state changes
    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        // Auto-play may be blocked by the browser. You can handle this error if needed.
        console.error('Error playing audio:', error);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Update the current time when the audio is playing
    const updateTime = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    // Attach the timeupdate event listener when the audio is loaded
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', updateTime);
    }

    // Cleanup event listener
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateTime);
      }
    };
  }, [episode]);

  const handlePlayback = () => {
    setIsPlaying((prev) => !prev);
    onPlaybackChange(!isPlaying);
  };

  const handleTimeSeek = (event) => {
    const time = parseFloat(event.target.value);
    setCurrentTime(time);
    audioRef.current.currentTime = time;
  };

  return (
    <div>
      <h2>{episode.title}</h2>
      <audio ref={audioRef} src={episode.audioUrl} />
      <div>
        <button onClick={handlePlayback}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <input
          type="range"
          min={0}
          max={audioRef.current ? audioRef.current.duration : 0}
          step={0.1}
          value={currentTime}
          onChange={handleTimeSeek}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
