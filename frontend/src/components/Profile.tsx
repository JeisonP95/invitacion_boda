import type React from "react"
import img_b from "../assets/pet_anillo.jpg"
import background from "../assets/rio_los_dos.jpg"
import Countdown from "./Countdown"

interface ProfileProps {
  bride: string
  groom: string
  message: string
  date: string
  location: string
  time: string
  weddingDate: Date
}

const Profile: React.FC<ProfileProps> = ({ bride, groom, date, message, location, time, weddingDate }) => {
  return (
    <div className="profile" style={{ backgroundImage: `url(${background})` }}>
      <div className="profile-content">
        <img src={img_b} alt={`${bride} y ${groom}`} className="profile-image" />
        <h1 className="names">
          {bride} & {groom}
        </h1>
        <div className="date">
          <span className="label">Sábado,  </span>
          <span className="day">11 </span>
          <span className="month">de Octubre   </span>
          <span className="year">2025</span>{date}
        </div>
        <div className="message">{message}</div>
        <div className="location">{location}</div>
        <div className="time">{time}</div>
        <Countdown weddingDate={weddingDate} />
      </div>
    </div>
  )
}

export default Profile
