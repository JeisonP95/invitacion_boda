"use client"

import type React from "react"
import { useState } from "react"

interface RSVPProps {
  onSubmit: (name: string, email: string, attending: boolean, guests: number) => void
  ticket: string | null
}

const RSVP: React.FC<RSVPProps> = ({ onSubmit, ticket }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [attending, setAttending] = useState(true)
  const [guests, setGuests] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(name, email, attending, guests)
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
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
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

      {ticket && (
        <div className="ticket">
          <h3>¡Gracias por confirmar tu asistencia!</h3>
          <p>Tu número de invitación es:</p>
          <div className="ticket-number">{ticket}</div>
          <p>Por favor, guarda este número para el día del evento.</p>
        </div>
      )}
    </div>
  )
}

export default RSVP
