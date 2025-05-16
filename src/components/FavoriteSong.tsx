"use client"

import type React from "react"
import { useState } from "react"

const FavoriteSong: React.FC = () => {
  const [song, setSong] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (song.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <div className="favorite-song">
      <h2>Canción Favorita</h2>
      <p>
        Nos encantaría que nos ayudes a crear la playlist perfecta para nuestra boda. ¿Cuál es esa canción que no puede
        faltar?
      </p>

      {!submitted ? (
        <form className="song-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre de la canción y artista"
            value={song}
            onChange={(e) => setSong(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">
            Enviar
          </button>
        </form>
      ) : (
        <p>¡Gracias por tu sugerencia! La añadiremos a nuestra playlist.</p>
      )}
    </div>
  )
}

export default FavoriteSong
