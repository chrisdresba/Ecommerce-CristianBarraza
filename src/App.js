import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Carrousel from './components/carrousel';
import ItemListContainer from './container/ItemListContainer'
import Footer from './components/Footer/Footer';

function App() {
    return (  
        <div className = "App" >
            <header className = "App-header" >
            <NavBar />
            <Carrousel />
            <ItemListContainer/>
            <Footer/>
            </header > 
            
        </div>
    );
}

export default App;