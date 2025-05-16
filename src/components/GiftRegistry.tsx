import type React from "react"

const GiftRegistry: React.FC = () => {
  return (
    <div className="gift-registry">
      <h2>Mesa de Regalos</h2>
      <p>
        Su presencia es nuestro mejor regalo, pero si desean obsequiarnos algo, hemos creado una mesa de regalos en las
        siguientes tiendas:
      </p>
      <div className="registry-links">
        <a href="#" className="registry-link">
          Liverpool
        </a>
        <a href="#" className="registry-link">
          Amazon
        </a>
        <a href="#" className="registry-link">
          Palacio de Hierro
        </a>
      </div>
    </div>
  )
}

export default GiftRegistry
