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
                        <li><Link to="/cart" style={{ textDecoration: 'none', color: '#FFF' }}>Cart</Link></li>
                        <li><Link to="/detail" style={{ textDecoration: 'none', color: '#FFF' }}>Detail</Link></li>
                    </ul>
                </nav>
            

                <Link to="/cart" style={{ textDecoration: 'none', color: '#FFF'}}><CartWidget/></Link>
              
        </header>
}

export default NavBar
