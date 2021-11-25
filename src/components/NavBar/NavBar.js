import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'


const NavBar = () =>{
    
return  <header className="navBar">
                <h1 className="titulo">Retrogames</h1>

                <nav>
                    <ul>
                        <li>Inicio</li>
                        <li>Tienda</li>
                        <li>Servicios</li>
                    </ul>
                </nav>
            
        
                <CartWidget/>
        </header>
}

export default NavBar
