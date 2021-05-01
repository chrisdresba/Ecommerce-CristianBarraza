import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Carrousel from './components/carrousel';
import ItemListContainer from './container/ItemList/ItemListContainer'
import ItemDetailContainer from './container/ItemDetail/ItemDetailContainer'
import Footer from './components/Footer/Footer';
import Armado from './components/enConstruccion';

function App() {
    return (  
        <BrowserRouter>
        <div className = "App" >
            <header className = "App-header" >
            <NavBar/>
                <Switch>
                    <Route path='/Home'>
                    <Carrousel />
                    <ItemListContainer/>
                    </Route>
                    <Route path='/ubicacion'>
                    <Armado />
                    </Route>
                    <Route path='/contacto'>
                    <Armado />
                    </Route>
                        <Route path='/servicios/reparaciones'>
                        <Armado />
                        </Route>
                        <Route path='/servicios/luthiers'>
                        <Armado />
                        </Route>
                        <Route path='/servicios/garantias'>
                        <Armado />
                        </Route>
                            <Route  path='/category/:categoryId'>
                            <Carrousel />   
                            <ItemListContainer/>
                            </Route>
                                <Route path='/item/:id'>
                                <ItemDetailContainer/>
                            </Route>
                    <Route path='/'>
                    <Carrousel />
                    <ItemListContainer/>
                    </Route>   
                </Switch>
            <Footer/>
            </header >  
        </div>
        </BrowserRouter>
    );
}

export default App;