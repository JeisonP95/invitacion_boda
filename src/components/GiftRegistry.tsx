import type React from "react"
import { FaGift, FaMoneyBillWave } from "react-icons/fa"
import { useState } from "react"

const GiftRegistry: React.FC = () => {
  const [showPhysicalGiftMessage, setShowPhysicalGiftMessage] = useState(false)
  const [showHoneymoonForm, setShowHoneymoonForm] = useState(false)
  const [amount, setAmount] = useState("")

  const handlePhysicalGiftClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowPhysicalGiftMessage(true)
    setShowHoneymoonForm(false)
  }

  const handleHoneymoonClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowHoneymoonForm(true)
    setShowPhysicalGiftMessage(false)
  }

  const handleCancel = () => {
    setShowHoneymoonForm(false)
    setAmount("")
  }

  const handleHoneymoonSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Ejemplo de datos a guardar
      const giftData = {
        type: 'honeymoon',
        amount: parseFloat(amount),
        timestamp: new Date()
      }
      
      // Aquí iría tu llamada a la API para guardar en la base de datos
      // await saveToDatabase(giftData)
      
      // Redirigir a la cuenta bancaria
      const bankKeyUrl = "http://link.mercadopago.com.co/electrosjp"
      window.open(bankKeyUrl, "_blank")
      
      // Limpiar el formulario
      setAmount("")
      setShowHoneymoonForm(false)
    } catch (error) {
      console.error("Error al procesar el aporte:", error)
    }
  }

  return (
    <div className="gift-registry">
      <h2>Mesa de Regalos</h2>
      <p>
        Su presencia es nuestro mejor regalo, pero si desean obsequiarnos algo, pueden elegir entre:
      </p>
      <div className="registry-links">
        <a href="#" className="registry-link" onClick={handlePhysicalGiftClick}>
          <FaGift className="registry-icon" />
          <span>Regalo Físico</span>
        </a>
        <a href="#" className="registry-link" onClick={handleHoneymoonClick}>
          <FaMoneyBillWave className="registry-icon" />
          <span>Aporte Luna de Miel</span>
        </a>
      </div>
      {showPhysicalGiftMessage && (
        <div className="gift-message">
          <p>
            ¡Gracias por tu interés! En la boda habrá un espacio designado para la entrega de regalos físicos.
            Te esperamos con mucho gusto.
          </p>
        </div>
      )}
      {showHoneymoonForm && (
        <div className="gift-message">
          <p className="honeymoon-message">
            ¡Muchas gracias por aportar a que nuestra luna de miel sea inolvidable!
          </p>
          <form onSubmit={handleHoneymoonSubmit} className="honeymoon-form">
            <div className="form-group">
              <input
                type="number"
                placeholder="Monto del aporte"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                min="1"
                className="form-input"
              />
            </div>
            <div className="button-group">
              <button type="submit" className="submit-btn">
                Continuar
              </button>
              <button type="button" className="cancel-btn" onClick={handleCancel}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default GiftRegistry
