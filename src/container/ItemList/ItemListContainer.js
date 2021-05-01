import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import ItemList from './ItemList';


export const ItemListContainer = () => {

    const [Items,setArrayItem] = useState([]);
    const [Aux,setItem] = useState([]);
    const {categoryId} = useParams();
    const {id} = useParams();

    useEffect(()=>{
        const listas = new Promise((resolve,reject)=>{ 
    
    const productos = [
        { img:'https://pbs.twimg.com/media/EBjQsowXUAAqLf4?format=jpg&name=large',
        descripcion : "kit 22″-10″-12″-14″-16″",
        id: "84657821",
        title:"Mapex Saturn 30th Anniversary",
        precio:'215.000',
        stock:2,
        category:"baterias"
        },
        { img:'https://mcdn01.gittigidiyor.net/61424/tn50/614242989_tn50_0.jpg',
        descripcion : "Guitarra Acustica Edición Limitada",
        id: "97423102",
        title:"Guitarra Acustica Yamaha C90",
        precio:'35.200',
        stock:4,
        category:"guitarras"
        },
        { img:'https://i.ebayimg.com/images/g/UpAAAOSw4DJYj3EN/s-l640.jpg',
        descripcion : "Bajo 4 cuerdas con Funda",
        id:"03125974",
        title:"Bajo Cort F90 ",
        precio:'71.300',
        stock:5,
        category:"bajos"
        },{ 
        img:'https://bairesrocks.vteximg.com.br/arquivos/ids/223670/Exportar_TECNICA-03.jpg?v=637515169366030000',
        descripcion : "Amplificador para Guitarra de 12W",
        id: "1645420",
        title:"Amplificador Orange Crush CR12",
        precio:'27.400',
        stock:3,
        category:"sonido"
        },
        { img:'https://tiendafeedback.com.ar/19924-large_default/guitarra-electrica-cort-tipo-prs-c-duncan-designed.jpg',
        descripcion : "Guitarra 6 cuerdas Edición Limitada",
        id: "63214574",
        title:"Guitarra Electrica PRS E-215",
        precio:'82.500',
        stock:5,
        category:"guitarras"
        },
        { img:'https://images.musicstore.de/images/0960/gibson-es-335-figured-2019-glacier-blue_1_GIT0046438-000.jpg',
        descripcion : "Guitarra 6 cuerdas Edición Limitada",
        id: "98745103",
        title:"Guitarra Electrica Gibson 335",
        precio:'197.500',
        stock:7,
        category:"guitarras"
        },
        { img:'https://www.pronorte.es/_files/product/13979/image/ibanez-srmd200k-aqg.jpg',
        descripcion : "Bajo 4 cuerdas con Funda",
        id:"115423876",
        title:"Bajo Ibanez SRMD200",
        precio:'99.170',
        stock:5,
        category:"bajos"
        },
        { img:'http://www.musicalblue.com.ar/5043-large_default/guitarra-fender-011-5802-300-telecaster-american-special-mn-sunburst.jpg',
        descripcion : "Guitarra Electrica Edición Americana",
        id: "12399653",
        title:"Guitarra Fender Telecaster Sunburst",
        precio:'174.000',
        stock:5,
        category:"guitarras"
        },
        { img:'https://tiendafeedback.com.ar/16289-large_default/bateria-sonor-essential-force-birch-creme-white.jpg',
        descripcion : "kit 20″-10″-12″-14″-14″",
        id: "12349754",
        title:"Bateria Sonor Essential Force",
        precio:'145.000',
        stock:5,
        category:"baterias"
        },{ 
        img:'http://www.masmusica.com.ar/887-large_default/amplificador-fender-227-2005-000-pguitarra-68-custom-princeton-reverb-.jpg',
        descripcion : "Amplificador para Guitarra de 60W",
        id: "1670000",
        title:"Amplificador Fender 68' Custom",
        precio:'245.190',
        stock:3,
        category:"sonido"
        },
        { img:'https://pbs.twimg.com/media/EBjQsowXUAAqLf4?format=jpg&name=large',
        descripcion : "kit 22″-10″-12″-14″-16″",
        id: "64711028",
        title:"Mapex Saturn 30th Anniversary",
        precio:'215.000',
        stock:2,
        category:"baterias"
        },
        { img:'https://i.ebayimg.com/images/g/UpAAAOSw4DJYj3EN/s-l640.jpg',
        descripcion : "Bajo 4 cuerdas con Funda",
        id:"22114785",
        title:"Bajo Cort F90",
        precio:'71.300',
        stock:5,
        category:"bajos"
        },
        { img:'https://images.musicstore.de/images/0960/gibson-es-335-figured-2019-glacier-blue_1_GIT0046438-000.jpg',
        descripcion : "Guitarra 6 cuerdas Edición Limitada",
        id: "99785403",
        title:"Guitarra Electrica Gibson 335",
        precio:'197.500',
        stock:6,
        category:"guitarras"
        },
        { img:'https://tiendafeedback.com.ar/19924-large_default/guitarra-electrica-cort-tipo-prs-c-duncan-designed.jpg',
        descripcion : "Guitarra 6 cuerdas Edición Limitada",
        id: "31467958",
        title:"Guitarra Electrica PRS E-215",
        precio:'82.500',
        stock:5,
        category:"guitarras"
        },{ 
        img:'https://tiendafeedback.com.ar/16761-large_default/teclado-casio-sa76-3-octavas-teclas-mini-color-negro-con-naranja-.jpg',
        descripcion : "Teclado infantil 3 octavas",
        id: "17648820",
        title:"Teclado Casio SA76 con Fuente",
        precio:'12.200',
        stock:3,
        category:"teclados"
        },
        { img:'http://www.musicalblue.com.ar/5043-large_default/guitarra-fender-011-5802-300-telecaster-american-special-mn-sunburst.jpg',
        descripcion : "Guitarra Electrica Edición Americana",
        id:"16497310",
        title:"Guitarra Fender Telecaster Sunburst",
        precio:'174.000',
        stock:3,
        category:"guitarras"
        },{ 
        img:'https://bairesrocks.vteximg.com.br/arquivos/ids/222687/Individual-02.png?v=637473557380770000',
        descripcion : "Nuevo modelo GAMA Profesional",
        id: "6008420",
        title:"Teclado Korg Sensitivo 5 Octavas",
        precio:'125.150',
        stock:3,
        category:"teclados"
        },
        { img:'https://www.pronorte.es/_files/product/13979/image/ibanez-srmd200k-aqg.jpg',
        descripcion : "Bajo 4 cuerdas con Funda",
        id:"185201473",
        title:"Bajo Ibanez SRMD200",
        precio:'99.170',
        stock:4,
        category:"bajos"
        },
        { 
        img:'https://tiendafeedback.com.ar/16289-large_default/bateria-sonor-essential-force-birch-creme-white.jpg',
        descripcion : "kit 20″-10″-12″-14″-14″",
        id: "16245320",
        title:"Bateria Sonor Essential Force",
        precio:'145.000',
        stock:3,
        category:"baterias"
        },{ 
        img:'https://bairesrocks.vteximg.com.br/arquivos/ids/223670/Exportar_TECNICA-03.jpg?v=637515169366030000',
        descripcion : "Amplificador para Guitarra de 12W",
        id: "16245320",
        title:"Amplificador Orange Crush CR12",
        precio:'27.400',
        stock:3,
        category:"sonido"
        },{ 
        img:'http://www.masmusica.com.ar/887-large_default/amplificador-fender-227-2005-000-pguitarra-68-custom-princeton-reverb-.jpg',
        descripcion : "Amplificador para Guitarra de 60W",
        id: "1678420",
        title:"Amplificador Fender 68' Custom",
        precio:'245.190',
        stock:3,
        category:"sonido"
        },
        { img:'https://mcdn01.gittigidiyor.net/61424/tn50/614242989_tn50_0.jpg',
        descripcion : "Guitarra Acustica Edición Limitada",
        id: "63369852",
        title:"Guitarra Acustica Yamaha C90",
        precio:'35.200',
        stock:4,
        category:"guitarras"
        },{ 
        img:'https://tiendafeedback.com.ar/16761-large_default/teclado-casio-sa76-3-octavas-teclas-mini-color-negro-con-naranja-.jpg',
        descripcion : "Teclado infantil 3 octavas",
        id: "16778820",
        title:"Teclado Casio SA76 con Fuente",
        precio:'12.200',
        stock:3,
        category:"teclados"
        },{ 
        img:'https://bairesrocks.vteximg.com.br/arquivos/ids/222687/Individual-02.png?v=637473557380770000',
        descripcion : "Nuevo modelo GAMA Profesional",
        id: "6478420",
        title:"Teclado Korg Sensitivo 5 Octavas",
        precio:'125.150',
        stock:3,
        category:"teclados"
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
   
    if(categoryId != undefined){
       
        listas.then((res)=>{
            const itemFilter = res.filter(item => item.category == `${categoryId}`);
        
        setItem(itemFilter)})
    }
    console.log(categoryId);


}   ,[categoryId])


        return(
            
            <>{categoryId == undefined? (
                <ItemList productos={Items}/> 
                ) : (
                    <ItemList productos={Aux}/> 
                    )}   </>       
                );
}

export default ItemListContainer;