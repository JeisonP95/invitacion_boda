import type React from "react"
import { useState } from "react"
import before from "../assets/before.png"
import next from "../assets/next.png"

interface DressEvent {
  title: string
  description: string
  image: string
}

interface DressCodeProps {
  events: DressEvent[]
}

const DressCode: React.FC<DressCodeProps> = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length)
  }

  return (
    <div className="dress-code">
      <h2>Código de Vestimenta</h2>
      <div className="timeline-wrapper">
        <button onClick={goToPrevious} className="timeline-button">
          <img src={before} alt="Anterior" className="arrow-icon" />
        </button>

        <div className="timeline-event">
          <img
            src={events[currentIndex].image}
            alt={events[currentIndex].title}
            className="timeline-image"
          />
          <h3 className="message">{events[currentIndex].title}</h3>
          <p className="message">{events[currentIndex].description}</p>
        </div>

        <button onClick={goToNext} className="timeline-button">
          <img src={next} alt="Siguiente" className="arrow-icon" />
        </button>
      </div>
    </div>
  )
}

export default DressCode
