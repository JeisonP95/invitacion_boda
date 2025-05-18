import type React from "react"
import { FaGift, FaMoneyBillWave } from "react-icons/fa"

const GiftRegistry: React.FC = () => {
  return (
    <div className="gift-registry">
      <h2>Mesa de Regalos</h2>
      <p>
        Su presencia es nuestro mejor regalo, pero si desean obsequiarnos algo, pueden elegir entre:
      </p>
      <div className="registry-links">
        <a href="#" className="registry-link">
          <FaGift className="registry-icon" />
          <span>Regalo Físico</span>
        </a>
        <a href="#" className="registry-link">
          <FaMoneyBillWave className="registry-icon" />
          <span>Aporte Luna de Miel</span>
        </a>
      </div>
    </div>
  )
}

export default GiftRegistry
