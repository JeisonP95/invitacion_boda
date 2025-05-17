"use client"

import type React from "react"
import { useState } from "react"

interface RSVPProps {
  onSubmit: (name: string, attending: boolean, guests: number) => void
  ticket: string | null
}

const RSVP: React.FC<RSVPProps> = ({ onSubmit, ticket }) => {
  const [name, setName] = useState("")
  const [telefono, setTelefono] = useState("")
  const [attending, setAttending] = useState(true)
  const [guests, setGuests] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(name, attending, guests)
  }

  return (
    <div className="rsvp">
      <h2>Confirmación de Asistencia</h2>
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre Completo</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Telefono</label>
          <input type="text" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>¿Asistirás?</label>
          <div className="radio-group">
            <div className="radio-option">
              <input
                type="radio"
                id="attending-yes"
                name="attending"
                checked={attending}
                onChange={() => setAttending(true)}
              />
              <label htmlFor="attending-yes">Sí, asistiré</label>
            </div>
            <div className="radio-option">
              <input
                type="radio"
                id="attending-no"
                name="attending"
                checked={!attending}
                onChange={() => setAttending(false)}
              />
              <label htmlFor="attending-no">No podré asistir</label>
            </div>
          </div>
        </div>
        {attending && (
          <div className="form-group">
            <label htmlFor="guests">Número de Acompañantes</label>
            <select id="guests" value={guests} onChange={(e) => setGuests(Number.parseInt(e.target.value))}>
              <option value="0">Solo yo</option>
              <option value="1">1 acompañante</option>
              <option value="2">2 acompañantes</option>
              <option value="3">3 acompañantes</option>
            </select>
          </div>
        )}
        <button type="submit" className="submit-btn">
          Confirmar
        </button>
      </form>

      {ticket && attending && (
        <div className="ticket">
          <h3>¡Gracias por confirmar tu asistencia!</h3>
          <p className="ticket-number">{name}</p>
          <p>Nos alegra mucho que puedas acompañarnos en este día tan especial.</p>
          <p>Tu presencia hará este momento aún más memorable.</p>
          <div className="ticket-message">
            <p>Con cariño,</p>
            <p className="signature">Valentina & Yeison</p>
          </div>
        </div>
      )}

      {ticket && !attending && (
        <div className="ticket decline-ticket">
          <h3>Gracias por tu respuesta</h3>
          <p>Lamentamos mucho que no puedas acompañarnos en este día tan especial.</p>
          <p>Tu presencia siempre estará en nuestros corazones.</p>
          <div className="ticket-message">
            <p>Con cariño,</p>
            <p className="signature">Valentina & Yeison</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default RSVP
