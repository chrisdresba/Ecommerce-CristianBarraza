import React, { useEffect, useState } from 'react'
import './animacion.css'
import ItemList from './ItemList'
import Imagen1 from '../components/Img/imagen1.jpg'
import Imagen2 from '../components/Img/imagen2.jpg'
import Imagen3 from '../components/Img/imagen3.jpg'
import Imagen4 from '../components/Img/imagen4.jpg'

export const ItemListContainer = () => {

    const [ArrayItems,setArrayItem] = useState([])

    //useEffect(()=>{
        
    
    const productos = [
        { img:{Imagen1},
        descripcion : "Mapex 5 cuerpos",
        Id: "123",
        title:"Bateria",
        precio:'51000'
        },
        { img:{Imagen2},
        descripcion : "hoy",
        Id: "123",
        title:"Guitarra Yamaha",
        precio:'35200'
        },
        { img:{Imagen3},
        descripcion : "hoy",
        Id:"123",
        title:"Bajo Cort",
        precio:'27300'
        },
        { img:{Imagen4},
        descripcion : "hoy",
        Id: "123",
        title:"Guitarra Electrica",
        precio:'62500'
        }
    ]

    const listas = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(productos)
        },2000)
    })

    listas.then((res=>{
        //setArrayItems(res);
        console.log(res);
    }))

    
        return( <ItemList /> );        
        
}

export default ItemListContainer;