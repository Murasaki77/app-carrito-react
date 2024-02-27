import { useState } from "react"

export const Card = ({imagen, titulo, descripcion, precio, puntaje, handleAgregar, handleQuitar}) => {

    const [added, setAdded] = useState(false)
    const clickAgregar = () => {
        handleAgregar()
        setAdded(true)
    }
    const clickQuitar = () => {
        handleQuitar()
        setAdded(false)
    }

  return (
<>
    <div className="tarjeta">
           <img src={imagen} alt={titulo} className="tarjeta-imagen" />
        <div className="tarjeta-contenido">
            <h4 className="tarjeta-titulo">{titulo}</h4>
            <h6 className="tarjeta-descripcion">{descripcion}</h6>
            <h6 className="tarjeta-precio">${precio}</h6>
           <h6 className="tarjeta-rating">{puntaje}</h6>

            {added ? (
                <button type="button"
                className="boton-quitar"
                onClick={clickQuitar}>Quitar de Carrito
                </button>
            ) : (
                <button type="button"
                className="boton-agregar"
                onClick={clickAgregar}>Agregar al Carrito
                </button>
            )}
        </div>

    </div>
</>
    
  )
}
