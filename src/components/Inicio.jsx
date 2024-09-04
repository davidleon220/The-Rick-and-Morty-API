import React, { useEffect, useState } from 'react'
import { todosPersonajes } from '../funciones/funciones.js'


const Inicio = () => {
const [personajes, setPersonajes] = useState(null)
  useEffect(() => {
    todosPersonajes(setPersonajes)
  }, [])

  return (
    <>
    {personajes != null ? (
      personajes.map(personaje => (
        <div key={personaje.id}>
          <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>
          {/* <img src={personaje.image} alt=''></img> */}
        </div>
      ))
    ) : ('No hay personajes')}
    
    
    
    
    
    </>
  )
}

export default Inicio
