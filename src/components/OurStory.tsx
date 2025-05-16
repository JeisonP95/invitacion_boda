import type React from "react"
import { useState, useRef } from "react"
import before from "../assets/before.png";
import next from "../assets/next.png";


interface StoryEvent {
  title: string;
  image: string;
}
interface OurStoryProps {
  events: StoryEvent[];
}
const OurStory: React.FC<OurStoryProps> = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="our-story">
      <h2>Nuestra Historia</h2>
      <div className="timeline-wrapper">
        <button onClick={goToPrevious} className="timeline-button">
          <img src={before} alt="Anterior" className="arrow-icon" />
        </button>
        <div className="timeline-event">
          <img
            src={events[currentIndex].image || "/placeholder.svg"}
            alt={events[currentIndex].title}
            className="timeline-image"
          /> 
        </div>
        <button onClick={goToNext} className="timeline-button">
          <img src={next} alt="Siguiente" className="arrow-icon" />
        </button>
      </div>

      <p className="song-message">Presiona el corazón para escuchar nuestra canción</p>
      <button onClick={togglePlay} className="heart-button">
        {isPlaying ? "⏸️" : "❤️"}
      </button>
    </div>
  )
}

export default OurStory
