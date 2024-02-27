import { Routes, Route } from "react-router-dom"
import {NavBar} from './Components/NavBar'
import {ComprasP} from './Pages/ComprasP'
import {CarritoP} from './Pages/CarritoP'
import {ProductosProvider} from './Provider/ProductosProvider'
import {CarritoProvider} from './Provider/CarritoProvider'
import { Inicio } from "./Pages/Inicio"
import './Styles/card.css'

export const App = () => {
  return (
    <ProductosProvider>
        <CarritoProvider>
            <NavBar></NavBar>
            <div className="container">
                <Routes>
                    <Route path='/compras' element={<ComprasP></ComprasP>}></Route>
                    <Route path='/carrito' element={<CarritoP></CarritoP>}></Route>
                    <Route path='/inicio' element={<Inicio></Inicio>}></Route>
                </Routes>
            </div>
        </CarritoProvider>
    </ProductosProvider>
  )
}
