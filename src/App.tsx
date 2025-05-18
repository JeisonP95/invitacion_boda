import { useState } from "react"
import "./App.css"
import Background from "./components/Background"
import Profile from "./components/Profile"
import Countdown from "./components/Countdown"
import OurStory from "./components/OurStory"
import Location from "./components/Location"
import Itinerary, { ItineraryEvent } from "./components/Itinerary"
import DressCode from "./components/DressCode"
import RSVP from "./components/RSVP"
import GiftRegistry from "./components/GiftRegistry"
import FavoriteSong from "./components/FavoriteSong"
import img from "./assets/rio_los_dos.jpg"
import img2 from "./assets/via_paraiso.jpg"
import img3 from "./assets/pet_anillo.jpg"

import dress_women from "./assets/dress_women.jpg";
import dress_men from "./assets/dress_men.jpg";


function App() {
  // Wedding date - change to your actual date
  const weddingDate = new Date("2025-10-11T19:00:00")

  // Couple information
  const coupleInfo = {
    bride: "Valentina",
    groom: "Yeison",
    date: "",
    message: "Porque eres una persona muy importante en nuestras vidas queremos que formes parte de este momento tan especial para nosotros.",
    location: "Casa del rio, Santander de Quilichao",
    time: "07:00 pm",
  }

  // Our story timeline
  const storyEvents = [
    {title: "Nuestro primer encuentro", image: img},
    {title: "Primer viaje juntos", image: img2},
    {title: "La propuesta", image: img3},
  ]

  // Dress code
  const dressEvents = [
    {
      title: "Damas",
      description:"Vestido largo en tonos pasteles. Evitar color blanco.",
      image: dress_women
    },
    {
      title: "Caballeros",
      description:"Traje formal oscuro con corbata o moño.",
      image: dress_men
    }
  ]
  

  // Wedding itinerary
  const itineraryEvents: ItineraryEvent[] = [
    { time: "16:00", event: "Ceremonia", type: "ceremony" },
    { time: "17:30", event: "Cóctel de bienvenida", type: "reception" },
    { time: "19:00", event: "Cena", type: "dinner" },
    { time: "20:30", event: "Primer baile", type: "dance" },
    { time: "21:00", event: "Fiesta", type: "dance" },
    { time: "01:00", event: "Fin del evento", type: "ceremony" },
  ]

  // State for RSVP
  const [ticket, setTicket] = useState<string | null>(null)

  // Handle RSVP submission
  const handleRSVP = (name: string, attending: boolean, guests: number) => {
    const ticketNumber = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0")
    setTicket(attending ? `INVITACIÓN-${ticketNumber} (${guests + 1} personas)` : `DECLINACIÓN-${ticketNumber}`)
  }

  return (
    <div className="app">
      <Background />
      <div className="content">
        <Profile
          bride={coupleInfo.bride}
          groom={coupleInfo.groom}
          date={coupleInfo.date}
          message={coupleInfo.message}
          location={coupleInfo.location}
          time={coupleInfo.time}
          weddingDate={weddingDate}
        />
        <OurStory events={storyEvents} />
        <Location
          name={coupleInfo.location}
          address="Av. Jardines 123, Col. Flores, Ciudad de México"
          googleMapsLink="https://maps.app.goo.gl/qnfgV4Gs6BjLJRWS6"
        />
        <Itinerary events={itineraryEvents} />
        <DressCode events={dressEvents} />
        <RSVP onSubmit={handleRSVP} ticket={ticket} />
        <GiftRegistry />
        <FavoriteSong />
      </div>
    </div>
  )
}

export default App
