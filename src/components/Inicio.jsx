import React, { useEffect, useState } from 'react'
import { todosPersonajes } from '../funciones/funciones.js'


const Inicio = () => {
const [personajes, setPersonajes] = useState(null)
  useEffect(() => {
    todosPersonajes(setPersonajes)
  }, [])

  return (
    <div className="contenedor">
      <h1>Lista de Personajes</h1>
      <div className="personaje-list">
        {personajes != null ? (
          personajes.map(personaje => (
            <div className="personaje-item" key={personaje.id}>
              <a href={`/personaje/${personaje.id}`}>
                {personaje.name}
              </a>
              {/* <img src={personaje.image} alt={personaje.name} /> */}
            </div>
          ))
        ) : (
          <p>No hay personajes</p>
        )}
      </div>
    </div>
  );
};

export default Inicio