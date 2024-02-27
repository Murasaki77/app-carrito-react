import { useReducer } from "react"
import { CarritoContext } from "../Context/CarritoContext"


export const CarritoProvider = ({children}) => {

    const initialState = []
    const comprasReducer = (state = initialState, action = {}) => {
        switch(action.type){
            case '[CARRITO] Agregar Compra':
                return[...state, action.payload]
            case '[CARRITO] Sumar Compra':
                return state.map(item =>{
                    const cant = item.cantidad + 1
                    if (item.id === action.payload) 
                    return {...item, cantidad: cant}
                return item
                })
            case '[CARRITO] Restar Compra':
                return state.map(item => {
                    const cant = item.cantidad -1
                    if (item.id === action.payload 
                        && item.cantidad > 1)
                    return{...item, cantidad: cant}
                    return item
                })
            case '[CARRITO] Eliminar Compra':
                return state.filter(compra => compra.id !== action.payload)
            default:
                return state
        }
    }


    const [listCompras, dispatch] = useReducer(comprasReducer, initialState)
    const agregarCompra = (compra ) =>{
        compra.cantidad = 1
        const action = {
            type: '[CARRITO] Agregar Compra',
            payload: compra
        }
        dispatch(action)
    }
    const sumarCompra = (id) =>{
        const action = {
            type: '[CARRITO] Sumar Compra',
            payload: id
        }
        dispatch(action)
    }
    const restarCompra = (id) =>{
        const action = {
            type: '[CARRITO] Restar Compra',
            payload: id
        }
        dispatch(action)
    }
    const eliminarCompra = (id) =>{
        const action = {
            type: '[CARRITO] Eliminar Compra',
            payload: id
        }
        dispatch(action)
    }
  return (
    <CarritoContext.Provider value={{listCompras, agregarCompra, sumarCompra,restarCompra,eliminarCompra}}>
        {children}
    </CarritoContext.Provider>
  )
}
