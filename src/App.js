import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer'

function App() {
    return (  
        <div className = "App" >
            <header className = "App-header" >
            <NavBar />
            <ItemListContainer greeting='Bienvenidos a IAM Music Store'/>
            </header > 
            
        </div>
    );
}

export default App;