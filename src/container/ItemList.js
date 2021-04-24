import React from 'react';
import Item from './Item'
import Imagen1 from '../components/Img/imagen1.jpg';
import Imagen2 from '../components/Img/imagen2.jpg';
import Imagen3 from '../components/Img/imagen3.jpg';
import Imagen4 from '../components/Img/imagen4.jpg';

const ItemList = () => {
        return (
            <div>
                <div id='Productos' style={{}}>
                    <Item
                    img={Imagen1}
                    descripcion = "Bateria 5 Cuerpos"
                    Id= "123"
                    title="Bateria Mapex"
                    precio='5000'
                    /> 
                     <Item
                    img={Imagen2}
                    descripcion = "Guitarra Acustica"
                    Id= "1223"
                    title="Guitarra Acustica Cort"
                    precio='34000'
                    /> 
                     <Item
                    img={Imagen3}
                    descripcion = "Bajo 4 cuerdas con Funda"
                    Id= "4523"
                    title="Bajo Ibanez"
                    precio='59100'
                    /> 
                     <Item
                    img={Imagen4}
                    descripcion = "Guitarra 6 cuerdas"
                    Id= "9987"
                    title="Guitarra Electrica PRS"
                    precio='79020'
                    />    
                     <Item
                    img={Imagen4}
                    descripcion = "Guitarra 6 cuerdas"
                    Id= "9987"
                    title="Guitarra Electrica PRS"
                    precio='79020'
                    />     
                     <Item
                    img={Imagen3}
                    descripcion = "Bajo 4 cuerdas con Funda"
                    Id= "4523"
                    title="Bajo Ibanez"
                    precio='59100'
                    /> 
                     <Item
                    img={Imagen2}
                    descripcion = "Guitarra Acustica"
                    Id= "1223"
                    title="Guitarra Acustica Cort"
                    precio='34000'
                    />       
                    <Item
                    img={Imagen1}
                    descripcion = "Bateria 5 Cuerpos"
                    Id= "123"
                    title="Bateria Mapex"
                    precio='57000'
                    /> 
                </div>


            </div>
        )
} 

export default ItemList;