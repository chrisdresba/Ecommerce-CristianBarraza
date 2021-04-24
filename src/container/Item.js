import React from 'react'
import './Item.css'
import ItemCount from '../components/ItemCount'

const Item = ({Id,precio,title,descripcion,img,stock}) => {

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
                <p className = "product-id">#{Id}</p>
            </div>
            <button>Agregar al Carrito</button>          
            <div className="product-stock">
                <ItemCount stock={stock}/>
            </div>
        </div>
     </>  
    )
}

export default Item