import type React from "react"
import backgroundImg from "../assets/anillo_playa.jpg"

const Background: React.FC = () => {
  return (
    <div className="background" style={{ backgroundImage: `url(${backgroundImg})` }}></div>
  )
}
export default Background
