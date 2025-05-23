import type React from "react"
import fotoUbi from "../assets/portada_dic.jpg"
import CustomIconButton from "../components/CustomIconButton"
import { FaMapMarkerAlt } from "react-icons/fa";

interface LocationProps {
  name: string
  address: string
  
  googleMapsLink: string
}

const Location: React.FC<LocationProps> = ({ name, address ,googleMapsLink }) => {
  return (
    <div className="location-section">
      <h2>Ubicación</h2>
      <div className="location-name">{name}</div>
      <div className="location-address">{address}</div>
      <div className="location-map-container">
        <img src={fotoUbi} alt="Mapa de ubicación" className="location-map"/>
        <div className="map-button-overlay">
          <CustomIconButton 
            onClick={() => window.open(googleMapsLink, "_blank")}
            icon={<FaMapMarkerAlt />}
            text="Google Maps"
          />
        </div>
      </div>
    </div>
  )
}

export default Location
