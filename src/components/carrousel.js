import React from 'react'
import './animacion.css'
import Imagen from './Carrousel.jpg'

const Carrousel = () => {

    return(
          //   <h1 style={{padding:'200px',color:'black'}}>Bienvenidos a Iam Music Store<span>&#160;</span></h1>          
         
          <img src={Imagen} className='carrousel'></img>         
          )
}

export default Carrousel;