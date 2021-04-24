import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';


export const ItemListContainer = () => {

    const [Items,setArrayItem] = useState([]);

    useEffect(()=>{
        const listas = new Promise((resolve,reject)=>{ 
    
    const productos = [
        { img:'https://pbs.twimg.com/media/EBjQsowXUAAqLf4?format=jpg&name=large',
        descripcion : "Bateria 5 Cuerpos",
        Id: "84657821",
        title:"Bateria Mapex",
        precio:'51000',
        stock:2
        },
        { img:'https://mcdn01.gittigidiyor.net/61424/tn50/614242989_tn50_0.jpg',
        descripcion : "Guitarra Acustica",
        Id: "97423102",
        title:"Guitarra Acustica Yamaha",
        precio:'35200',
        stock:4
        },
        { img:'https://i.ebayimg.com/images/g/UpAAAOSw4DJYj3EN/s-l640.jpg',
        descripcion : "Bajo 4 cuerdas con Funda",
        Id:"03125974",
        title:"Bajo Cort F90",
        precio:'71300',
        stock:5
        },
        { img:'https://tiendafeedback.com.ar/19924-large_default/guitarra-electrica-cort-tipo-prs-c-duncan-designed.jpg',
        descripcion : "Guitarra 6 cuerdas",
        Id: "63214574",
        title:"Guitarra Electrica PRS",
        precio:'82500',
        stock:5
        },
        { img:'https://tiendafeedback.com.ar/19924-large_default/guitarra-electrica-cort-tipo-prs-c-duncan-designed.jpg',
        descripcion : "Guitarra 6 cuerdas",
        Id: "98745103",
        title:"Guitarra Electrica PRS",
        precio:'82500',
        stock:7
        },
        { img:'https://i.ebayimg.com/images/g/UpAAAOSw4DJYj3EN/s-l640.jpg',
        descripcion : "Bajo 4 cuerdas con Funda",
        Id:"115423876",
        title:"Bajo Cort F90",
        precio:'71300',
        stock:5
        },
        { img:'https://mcdn01.gittigidiyor.net/61424/tn50/614242989_tn50_0.jpg',
        descripcion : "Guitarra Acustica",
        Id: "12399653",
        title:"Guitarra Acustica Yamaha",
        precio:'35200',
        stock:5
        },
        { img:'https://pbs.twimg.com/media/EBjQsowXUAAqLf4?format=jpg&name=large',
        descripcion : "Bateria 5 Cuerpos",
        Id: "12349754",
        title:"Bateria Mapex",
        precio:'51000',
        stock:5
        },
        { img:'https://pbs.twimg.com/media/EBjQsowXUAAqLf4?format=jpg&name=large',
        descripcion : "Bateria 5 Cuerpos",
        Id: "64711028",
        title:"Bateria Mapex",
        precio:'51000',
        stock:2
        },
        { img:'https://mcdn01.gittigidiyor.net/61424/tn50/614242989_tn50_0.jpg',
        descripcion : "Guitarra Acustica",
        Id: "63369852",
        title:"Guitarra Acustica Yamaha",
        precio:'35200',
        stock:4
        },
        { img:'https://i.ebayimg.com/images/g/UpAAAOSw4DJYj3EN/s-l640.jpg',
        descripcion : "Bajo 4 cuerdas con Funda",
        Id:"22114785",
        title:"Bajo Cort F90",
        precio:'71300',
        stock:5
        },
        { img:'https://tiendafeedback.com.ar/19924-large_default/guitarra-electrica-cort-tipo-prs-c-duncan-designed.jpg',
        descripcion : "Guitarra 6 cuerdas",
        Id: "31467958",
        title:"Guitarra Electrica PRS",
        precio:'82500',
        stock:5
        },
        { img:'https://tiendafeedback.com.ar/19924-large_default/guitarra-electrica-cort-tipo-prs-c-duncan-designed.jpg',
        descripcion : "Guitarra 6 cuerdas",
        Id: "97463185",
        title:"Guitarra Electrica PRS",
        precio:'82500',
        stock:7
        },
        { img:'https://i.ebayimg.com/images/g/UpAAAOSw4DJYj3EN/s-l640.jpg',
        descripcion : "Bajo 4 cuerdas con Funda",
        Id:"185201473",
        title:"Bajo Cort F90",
        precio:'71300',
        stock:5
        },
        { img:'https://mcdn01.gittigidiyor.net/61424/tn50/614242989_tn50_0.jpg',
        descripcion : "Guitarra Acustica",
        Id: "16497310",
        title:"Guitarra Acustica Yamaha",
        precio:'35200',
        stock:5
        },
        { img:'https://pbs.twimg.com/media/EBjQsowXUAAqLf4?format=jpg&name=large',
        descripcion : "Bateria 5 Cuerpos",
        Id: "16245320",
        title:"Bateria Mapex",
        precio:'51000',
        stock:5
        }
    ];
   
        setTimeout(()=>{
            resolve(productos)
        },2000)
    })
    listas.then((res)=>{
        setArrayItem(res);  
    })
    .catch(()=>{
        console.log("Error al cargar")
    })
    .finally(()=>{
        console.log("Finalizado")
    })
}   ,[])

    
        return( <ItemList productos={Items}/> );        
        
}

export default ItemListContainer;