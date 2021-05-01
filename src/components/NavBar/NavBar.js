import React, { Fragment } from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../NavBar/logo.jpeg'
import { NavLink}  from 'react-router-dom';
import { Link}  from 'react-router-dom';

const NavBar = () => {

    return(
        <>
            <div id='menu'>
                <div className="header">            
                <CartWidget/>
                </div>
                <ul class='navBar'> 
                  <li><NavLink to={`/`}><img src={Logo} className="navLogo"/></NavLink></li>
                  <li className="navStyle" id='idHome'><NavLink to={`/home`} style={{ textDecoration: 'none'}}><p>HOME</p></NavLink></li> 
                  <li className="navStyle"><p>PRODUCTOS</p> 
                    <ul id='subMenu'>
                        <li><NavLink to={`/category/bajos`} style={{ textDecoration: 'none'}}><p>BAJOS</p></NavLink></li>
                        <li><Link to={`/category/baterias`} style={{ textDecoration: 'none'}}><p>BATERIAS</p></Link></li> 
                        <li><Link to={`/category/guitarras`} style={{ textDecoration: 'none'}}><p>GUITARRAS</p></Link></li> 
                        <li><Link to={`/category/sonido`} style={{ textDecoration: 'none'}}><p>SONIDO</p></Link></li>
                        <li><Link to={`/category/teclados`} style={{ textDecoration: 'none'}}><p>TECLADOS</p></Link></li>         
                    </ul>   
                 
                  </li> 
                  <li className="navStyle" id='idServicios'><p>SERVICIOS</p>
                    <ul id='subMenu'>
                        <li><NavLink to={`/servicios/garantias`} style={{ textDecoration: 'none'}}><p>GARANTIAS</p></NavLink></li> 
                        <li><NavLink to={`/servicios/luthiers`} style={{ textDecoration: 'none'}}><p>LUTHIERS</p></NavLink></li> 
                        <li><NavLink to={`/servicios/reparaciones`} style={{ textDecoration: 'none'}}><p>REPARACIONES</p></NavLink></li>        
                    </ul>  
                  </li>   
                  <li className="navStyle" id='idUbicacion'><NavLink to={`/ubicacion`} style={{ textDecoration: 'none'}}><p>UBICACION</p></NavLink></li> 
                  <li className="navStyle" id='idCOntacto'><NavLink to={`/contacto`} style={{ textDecoration: 'none'}}><p>CONTACTO</p></NavLink></li> 
                 
                </ul>
                <CartWidget/>
            </div>   
         </>     
       
    )
}

export default NavBar;