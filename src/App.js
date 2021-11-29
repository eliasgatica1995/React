import logo from './logo.svg';
import './App.css';
import React, {useEffect,useState} from "react";
import NavBar from './components/NavBar/NavBar.js';
import { Footer } from './components/Footer/Footer';
import { HomeView } from './components/HomeView/HomeView';
import {Container}  from './components/Container/Container';
import {Clicker}  from './components/Clicker/Clicker';
import {FyH}  from './components/Clicker/FyH.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemCount} from './components/ItemCount/ItemCount'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import { CartView } from './components/CartView/CartView';
import { Link } from 'react-router-dom';
import {PostApi} from './components/PostApi/PostApi'
function App() {
  const saludo1 = "Hola Item List Container";

  const [mostrar, setMostrar] = useState(true)
  return (
    <div className="App">
      <BrowserRouter>
       
            <NavBar/>
        <Container>
            <Routes>
                <Route path="/" element={<ItemListContainer/> }/>
                <Route path="/category/:categoryId" element={ <ItemListContainer/> }/>                
                <Route path="/detail/:itemId" element={ <ItemDetailContainer/> }/>
                <Route path="/cart" element={ <CartView/> }/>
                <Route path="*" element={ <Navigate to="/"/> }/>
    
            </Routes>
            
                <FyH/>
              
                  
        </Container>
          
      <Footer/>
      
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
