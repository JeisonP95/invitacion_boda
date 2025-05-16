import type React from "react"
import img_b from "../assets/pet_anillo.jpg"
import anillo from "../assets/Engagement-Couple.png"

interface ProfileProps {
  bride: string
  groom: string
  message: string
  date: string
  location: string
  time: string
}

const Profile: React.FC<ProfileProps> = ({ bride, groom, date, message, location, time }) => {
  return (
    <div className="profile">
      <img src= {img_b} alt={`${bride} y ${groom}`} className="profile-image" />
      <h1 className="names">
        {bride} & {groom}
      </h1>
      <div className="date">
        <span className="label">Sábado,  </span>
        <span className="day">11 </span>
        <span className="month">de Octubre   </span>
        <span className="year">2025</span>{date}
      </div>
      <img src={anillo} alt="Anillo de compromiso" className="invite-image" />
      <div className="message">{message}</div>
      <div className="location">{location}</div>
      <div className="time">{time}</div>
    </div>
  )
}

export default Profile
