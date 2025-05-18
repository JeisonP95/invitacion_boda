import type React from "react"
import { useState, useRef } from "react"
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
  const [isSliding, setIsSliding] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const goToNext = () => {
    if (isSliding) return
    setIsSliding(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length)
    setTimeout(() => setIsSliding(false), 500)
  }

  const goToPrevious = () => {
    if (isSliding) return
    setIsSliding(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length)
    setTimeout(() => setIsSliding(false), 500)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrevious()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <div className="dress-code">
      <h2>Código de Vestimenta</h2>
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
            src={events[currentIndex].image}
            alt={events[currentIndex].title}
            className={`timeline-image ${isSliding ? 'sliding' : ''}`}
            style={{
              transform: isSliding ? 'scale(0.95)' : 'scale(1)',
              transition: 'transform 0.5s ease'
            }}
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
