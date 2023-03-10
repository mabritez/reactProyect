import React from "react"
import './NavBar.css'
import CartWidget from "./CartWidget/CartWidget"



const NavBar = () =>{
    return(
        <body>
            <header className="header">
            <div className="marca">
                <h1>Joey`s burgers</h1>
            </div>
            <nav>
                
                <div>
                <ul className="nav-links">
                    <li> <a href="#">Inicio</a></li>
                    <li> <a href="#">Nosotros</a></li>
                    <li> <a href="#">Menù</a></li>
                    <li> <a href="#">Contacto</a></li>
                    <li><a href="#"><CartWidget/></a></li>
                </ul>
                </div>
                
                
            </nav>
        </header>

        </body>
    )
}

export default NavBar