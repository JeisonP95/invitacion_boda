import type React from "react"
import { FaGift, FaMoneyBillWave } from "react-icons/fa"
import { useState } from "react"
import nequiQR from "../assets/qr_nequi.jpg"

const GiftRegistry: React.FC = () => {
  const [showPhysicalGiftMessage, setShowPhysicalGiftMessage] = useState(false)
  const [showHoneymoonForm, setShowHoneymoonForm] = useState(false)
  const [amount, setAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("mercadopago")
  const [showNequiInfo, setShowNequiInfo] = useState(false)

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
    setPaymentMethod("mercadopago")
    setShowNequiInfo(false)
  }

  const handleHoneymoonSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const giftData = {
        type: 'honeymoon',
        amount: parseFloat(amount),
        paymentMethod,
        timestamp: new Date()
      }
      
      // Aquí iría tu llamada a la API para guardar en la base de datos
      // await saveToDatabase(giftData)
      
      // Redirigir según el método de pago seleccionado
      if (paymentMethod === "mercadopago") {
        const bankKeyUrl = "http://link.mercadopago.com.co/electrosjp"
        window.open(bankKeyUrl, "_blank")
        setShowHoneymoonForm(false)
      } else if (paymentMethod === "nequi") {
        setShowNequiInfo(true)
      }
      
      // Limpiar el formulario
      setAmount("")
    } catch (error) {
      console.error("Error al procesar el aporte:", error)
    }
  }

  const handleCloseNequiInfo = () => {
    setShowNequiInfo(false)
    setShowHoneymoonForm(false)
    setPaymentMethod("mercadopago")
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
            <div className="payment-methods">
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mercadopago"
                  checked={paymentMethod === "mercadopago"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>Mercado Pago</span>
              </label>
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="nequi"
                  checked={paymentMethod === "nequi"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>Nequi</span>
              </label>
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
      {showNequiInfo && (
        <div className="nequi-info">
          <div className="nequi-content">
            <h3>Información de Pago Nequi</h3>
            <p className="nequi-number">Número: 3001234567</p>
            <div className="qr-container">
              <img src={nequiQR} alt="Código QR Nequi" className="nequi-qr" />
            </div>
            <p className="nequi-instructions">
              Escanea el código QR o usa el número para realizar tu aporte
            </p>
            <button className="close-btn" onClick={handleCloseNequiInfo}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default GiftRegistry
