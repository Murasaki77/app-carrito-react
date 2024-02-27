import { useEffect, useState } from "react"
import { ProductosContext } from "../Context/ProductosContext"


export const ProductosProvider = ({children}) => {
  
    const [productos, setProductos] = useState([])
    

    const fetchProductos = async () => {
        const response = await fetch('https://fakestoreapi.com/products')//punto de donde se toman los datos de los productos
        const data = await response.json()
        setProductos(data)
        console.log(data)
    }

    useEffect(() => {
        fetchProductos()
    }, [])



return (
    <ProductosContext.Provider value={{productos}}>
        {children}
    </ProductosContext.Provider>
  )
}
