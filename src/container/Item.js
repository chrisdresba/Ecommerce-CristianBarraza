import React from 'react'
import './Item.css'

const Item = ({Id,precio,title,descripcion,img}) => {

    return (
     <>
        <div className="product-Card">  
            <div>
                <img src={img} width="250px"></img>
                <p className="product-style">{title}</p>
                <p className="product-style">
                    <strong>$ {precio}</strong>
                </p>
                <p className = "product-style">{descripcion}</p>
                <p>{Id}</p>
            </div>
            <button>Agregar al Carrito</button>
           
        </div>
     </>  
    )
}

export default Item