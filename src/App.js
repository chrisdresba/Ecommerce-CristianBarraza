import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Carrousel from './container/carrousel';
import ItemListContainer from './container/ItemListContainer'

function App() {
    return (  
        <div className = "App" >
            <header className = "App-header" >
            <NavBar />
            <Carrousel />
            <ItemListContainer/>
            </header > 
            
        </div>
    );
}

export default App;