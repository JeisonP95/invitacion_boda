import type React from "react"
import { useState, useRef, useEffect } from "react"
import before from "../assets/before.png";
import next from "../assets/next.png";
import cancion from "../assets/cancion.mp3";
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaRandom, FaRedo } from "react-icons/fa";

const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const SpotifyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

interface StoryEvent {
  title: string;
  image: string;
}
interface OurStoryProps {
  events: StoryEvent[];
}

const OurStory: React.FC<OurStoryProps> = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, []);

  const goToNext = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    setTimeout(() => setIsSliding(false), 500);
  };

  const goToPrevious = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    setTimeout(() => setIsSliding(false), 500);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          await audioRef.current.pause();
        } else {
          await audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.error("Error al reproducir el audio:", error);
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="our-story">
      <h2>Nuestra Historia</h2>
      <div className="timeline-wrapper">
        <button onClick={goToPrevious} className="timeline-button">
          <img src={before} alt="Anterior" className="arrow-icon" />
        </button>
        <div 
          className="timeline-event"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={events[currentIndex].image || "/placeholder.svg"}
            alt={events[currentIndex].title}
            className={`timeline-image ${isSliding ? 'sliding' : ''}`}
            style={{
              transform: isSliding ? 'scale(0.95)' : 'scale(1)',
              transition: 'transform 0.5s ease'
            }}
          />
        </div>
        <button onClick={goToNext} className="timeline-button">
          <img src={next} alt="Siguiente" className="arrow-icon" />
        </button>
      </div>

      <div className="music-controls">
        <p className="song-message">Presiona el botón para escuchar nuestra canción</p>
        <div className="music-player">
          <button className="control-button">
            <FaRandom />
          </button>
          <button className="control-button">
            <FaStepBackward />
          </button>
          <button onClick={togglePlay} className="play-button">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="control-button">
            <FaStepForward />
          </button>
          <button className="control-button">
            <FaRedo />
          </button>
        </div>
        <audio
          ref={audioRef}
          src={cancion}
          onEnded={() => setIsPlaying(false)}
          preload="auto"
        />
        <div className="music-links">
          <a href="https://youtu.be/450p7goxZqg?si=1_eH0yosoYamXvEd" target="_blank" rel="noopener noreferrer" className="music-link">
            <YouTubeIcon />
            YouTube
          </a>
          <a href="https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a?si=lX_JECJySCq__bXZxkq98w" target="_blank" rel="noopener noreferrer" className="music-link">
            <SpotifyIcon />
            Spotify
          </a>
        </div>
      </div>
    </div>
  )
}

export default OurStory
