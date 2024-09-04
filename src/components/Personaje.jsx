import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { unicoPersonaje } from '../funciones/funciones'

const Personaje = () => {
  const [personaje, setPersonaje] = useState(null)

  const params = useParams()

  useEffect(() => {
    unicoPersonaje(params.id, setPersonaje)
  }, [])
  return (
    <div className="contenedor">
      {personaje != null ? (
        <div className="personaje-detail">
          <h2>Personaje con el id {params.id}</h2>
          <p>Nombre: {personaje.name}</p>
          <img src={personaje.image} alt={personaje.name} />
        </div>
      ) : (
        <p>No hay personajes</p>
      )}
    </div>
  );
};

export default Personaje
