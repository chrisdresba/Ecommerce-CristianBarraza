import React from 'react'
import '../../App.css'
import LogoCarrito from '../../Img/carrito.png'

const CartWidget = () => {

    return(
        <>
            <div className="Navbar" style= {{background: '#ddd'}}>
                <button style= {{marginRight:'10px', float:'right',marginTop: '-45px'}}>
                     <img src= {LogoCarrito} style={{width:'20px', marginRight:'5px'}}/>
                     (0)
                </button>
            </div>   
         </>     
       
    )
}

export default CartWidget;