import type React from "react"

interface ItineraryEvent {
  time: string
  event: string
}

interface ItineraryProps {
  events: ItineraryEvent[]
}

const Itinerary: React.FC<ItineraryProps> = ({ events }) => {
  return (
    <div className="itinerary">
      <h2>Itinerario</h2>
      <div className="itinerary-list">
        {events.map((event, index) => (
          <div key={index} className="itinerary-item">
            <div className="itinerary-time">{event.time}</div>
            <div className="itinerary-event">{event.event}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Itinerary
