import React from 'react'
import './animacion.css'

const ItemListContainer = ({greeting}) => {

    return(
             <h1 style={{padding:'200px',color:'black'}}>{greeting} <span>&#160;</span></h1>          
    )
}

export default ItemListContainer;