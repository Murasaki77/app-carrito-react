import { Badge } from "@mui/material"
import {ShoppingCart} from "@mui/icons-material"
import { useContext } from "react"
import { CarritoContext } from "../Context/CarritoContext"
import { NavLink } from "react-router-dom"

export const NavBar = () => {
    const {listCompras} = useContext(CarritoContext)
  return (
  
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <NavLink to='/inicio'
        className='navbar-brand'
        href='#'>
        Inicio
        </NavLink>
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle='collapse'
        data-bs-target='#navbarSupportedContent'
        aria-controls="navbarSupportedContent"
        aria-expanded='false'
        aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div 
        className="collapse navbar-collapse"
        id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink to='/compras' 
                    className='nav-link active'>
                    Compras
                    </NavLink>
                </li>
            </ul>
            <NavLink to='/carrito'>
                <Badge badgeContent={listCompras.length}
                color='success'>
                    <ShoppingCart color="action"/>
                        
                </Badge>
            </NavLink>
        </div>
    </div>
  </nav>
  
  )
}
