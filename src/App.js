import logo from './logo.svg';
import './App.css';
import React, {useEffect,useState} from "react";
import NavBar from './components/NavBar/NavBar.js';
import { Footer } from './components/Footer/Footer';
import {Container}  from './components/Container/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemCount} from './components/ItemCount/ItemCount'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import { CartView } from './components/CartView/CartView';
import { Link } from 'react-router-dom';
import {PostApi} from './components/PostApi/PostApi'
import { CartProvider } from './components/context/CartContext';

function App() {


  return (
    <div className="App">

    <CartProvider>
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
            
                    
          </Container>
            
          <Footer/>
        
        </BrowserRouter>
      </CartProvider>
      
    </div>
  );
}

export default App;
