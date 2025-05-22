"use client"

import type React from "react"
import { useState } from "react"
import {ref, update} from "firebase/database"
import { database } from "../services/Firebase"

interface DataForm{
  name: string
  telefono: string
  asistencia: boolean
  acompanantes: boolean
  metodos_pago: string
  valor_pagado: number
  cancion: string
}

const FavoriteSong: React.FC = () => {
  const [song, setSong] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    const dbRef = ref(database, );
    update(dbRef, {
      cancion: song
    })
    e.preventDefault();
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
