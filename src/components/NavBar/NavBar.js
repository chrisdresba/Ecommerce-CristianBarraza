import React, { Fragment } from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../NavBar/logo.png'

const NavBar = () => {
//display:'flex',flexDirection: 'row'
    return(
        <React.Fragment>
            <div id='menu'>
                <ul class='navBar'> 
                  <li> <img src={Logo}/></li>
                  <li id='idHome'><p>Home</p></li> 
                  <li id='idProducto'><p>Productos</p>
                    <ul id='subMenu'>
                        <li id='idProducto'><p>Amplificadores</p></li>
                        <li id='idProducto'><p>Audio</p></li> 
                        <li id='idProducto'><p>Bajos</p></li> 
                        <li id='idProducto'><p>Baterias</p></li>
                        <li id='idProducto'><p>Guitarras</p></li> 
                        <li id='idProducto'><p>Sonido</p></li> 
                        <li id='idProducto'><p>Teclados</p></li>          
                    </ul>   
                  </li> 
                  <li id='idServicios'><p>Servicios</p>
                    <ul id='subMenu'>
                        <li id='idProducto'><p>Garantias</p></li> 
                        <li id='idProducto'><p>Luthiers</p></li> 
                        <li id='idProducto'><p>Reparaciones</p></li>        
                    </ul>  
                  </li>   
                  <li id='idUbicacion'><p>Ubicacion</p></li> 
                  <li id='idCOntacto'><p>Contacto</p></li> 
                    <CartWidget/>
                </ul>
           
            </div>   
         </React.Fragment>     
       
    )
}

export default NavBar;