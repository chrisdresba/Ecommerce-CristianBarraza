import React, {useState} from 'react';
import './animacion.css';

const ItemCount = ({stock}) => {

    const [stockTotal, setStockTotal] = useState(stock);
    const [stockX, setStockX] = useState(0);
  

    const sumar = () => {   
        if(stockTotal !== 0){
        setStockX(stockX + 1);
        setStockTotal(stockTotal - 1)        
        }
    }

    const restar = () => {
        
        if(stockX !== 0){
        setStockX(stockX - 1);
        setStockTotal(stockTotal + 1)        
        }
    }

   return(
       <>
        <div className='btnStock'>
            <button className='btnStockResta' onClick={restar}>-</button>
            <p style={{color:'black'}}>{stockX}</p>
            <button className='btnStockSuma' onClick={sumar}>+</button>
        </div>       
       </>
   )
}

export default ItemCount;