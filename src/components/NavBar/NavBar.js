import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () =>{
    
return  <header className="navBar">
                
                <Link to="/" style={{ textDecoration: 'none', color: '#FFF'}}><h1 className="titulo">Open Market</h1></Link>
                <nav>
                    <ul>
                        <li><Link to="/category/electronics" style={{ textDecoration: 'none', color: '#FFF' }}>Electronics</Link></li>
                        <li><Link to="/category/men's-clothing" style={{ textDecoration: 'none', color: '#FFF' }}>Ropa de hombre</Link></li>
                        <li><Link to="/category/women's-clothing" style={{ textDecoration: 'none', color: '#FFF' }}>Ropa de mujer</Link></li>
                        <li><Link to="/cart" style={{ textDecoration: 'none', color: '#FFF' }}>Cart</Link></li>
                    </ul>
                </nav>
            

                <Link to="/cart" style={{ textDecoration: 'none', color: '#FFF'}} className="iconoCarro"><CartWidget/></Link>
              
        </header>
}

export default NavBar
