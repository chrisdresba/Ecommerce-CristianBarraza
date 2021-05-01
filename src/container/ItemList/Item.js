import React from 'react'
import {Link}  from 'react-router-dom';
import './Item.css'
import ItemCount from './ItemCount'

const Item = ({id,precio,title,descripcion,img,stock}) => {

    return (
     <>
        <div className="product-Card" id={id}>  
            <div>
                <Link to={`/item/${id}`}>
                <img src={img} width="250px"></img>
                </Link>
                <p className="product-style">{title}</p>
                <p className="product-price">
                    <strong>$ {precio}</strong>
                </p>
                <p className = "product-style">{descripcion}</p>
                <p className = "product-id">#{id}</p>
            </div>
            <button className = "product-btn">Agregar al Carrito</button>          
            <div className="product-stock">
                    <ItemCount stock={stock} />
            </div>
        </div>
     </>  
    )
}

export default Item