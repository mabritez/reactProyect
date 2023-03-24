import React from "react"
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"


const NavBar = () =>{
    return(
        
        <body>
            <header className="header">
                
                <div className="marca">
                    <h1>Joey`s burgers</h1>
                
                </div>

                <nav>

                    <div >
                        <ul className="navLinks">
                            <li><Link  to='category/hamburguesas'>hamburguesas</Link></li> 
                            <li><Link  to='category/acompañamientos'>Acompañamientos</Link></li>
                            <li><Link  to='category/bebidas'>bebidas</Link></li>
                            <li><CartWidget/></li>
                        </ul>
                       
                    </div>
                
                </nav>
            </header>
            
        </body>
        
        
    )
}

export default NavBar;
