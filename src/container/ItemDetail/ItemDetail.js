import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemList/ItemCount'


const ItemDetail = ({ producto }) => {

    return (

        <div className="product-Detail">
            <div className="left-Detail">
                <img className="img-Detail" src={producto.img} width="400px"></img>
            </div>
            <div className="right-Detail">
                <p className="title-Detail"><strong>{producto.title}</strong></p>
                <p className="price-Detail">
                    <strong>${producto.precio}</strong>
                </p>
                <p>12 cuotas sin interés con Visa ó MasterCard de entidades bancarias</p>
                <div className="stock-Detail">
                    <ItemCount className="stk-Detail" stock={producto.stock}/> 
                    <button className="btn-Detail">Agregar al Carrito</button>
                </div>
                <p className="descripcion-Detail">{producto.descripcion}</p>
                <p className="info-Detail" >INFORMACIÓN : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            
        </div>

    )
}

export default ItemDetail;