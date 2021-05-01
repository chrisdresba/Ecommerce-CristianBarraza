import React from 'react';
import Item from './Item'


const ItemList = ({productos}) => {
    
        return (
            <div>
                <div id='product-Card'>
                {productos.map((item)=>             
                    <Item id={item.id} precio={item.precio} title={item.title} descripcion={item.descripcion} img={item.img} stock={item.stock}/>
                )}   
                </div>


            </div>
        )
} 

export default ItemList;