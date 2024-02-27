import { useContext } from "react"
import { CarritoContext } from "../Context/CarritoContext"


export const CarritoP = () => {
    const {listCompras, sumarCompra, restarCompra, eliminarCompra} = useContext(CarritoContext)

    const calcularTotal = () => {
        return listCompras.reduce((total, item) => total + item.price*item.cantidad,0).toFixed(2)

    }
    const handleImp = () => {
        print()
    }

  return (
    <>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {listCompras.map(item => (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>$ {item.price}</td>
                        <td>
                            <button
                            className="btn btn-ouline-primary"
                            onClick={() => sumarCompra(item.id)}>+
                            </button>
                            <button
                            className="btn btn-primary">
                                {item.cantidad}
                            </button>
                            <button
                            className="btn btn-ouline-primary"
                            onClick={() => restarCompra(item.id)}>-
                            </button>
                            <button 
                            type="button"
                            className="btn btn-danger"
                            onClick={() => eliminarCompra(item.id)}>Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            <tr>
            <td><b>TOTAL: </b></td>
            <td></td>
            <td></td>
            <td>$ {calcularTotal()}</td>
            </tr>
            </tbody>
            
        </table>
    <div className="d-grid gap-2">
        <button className="btn btn-primary"
        onClick={handleImp}
        disabled={listCompras<1}>
            Comprar
        </button>
    </div>
    </>
    
  )
}
