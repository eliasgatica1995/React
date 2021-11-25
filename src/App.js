import logo from './logo.svg';
import './App.css';
import React, {useEffect,useState} from "react";
import NavBar from './components/NavBar/NavBar.js';
/*import {  NavBar } from './components/NavBar';*/
import { Footer } from './components/Footer/Footer';
import { HomeView } from './components/HomeView/HomeView';
import {Container}  from './components/Container/Container';
import {Clicker}  from './components/Clicker/Clicker';
import {FyH}  from './components/Clicker/FyH.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemCount} from './components/ItemCount/ItemCount'
function App() {
  const saludo1 = "Hola ";
  const saludo2 = "Saludo";
  const [mostrar, setMostrar] = useState(true)
  return (
    <div className="App">
      <NavBar/>
      <Container>
        <FyH/>
        
        <HomeView saludo={ saludo1 } texto={saludo2}/>
        <button onClick={()=>{setMostrar(!mostrar)}}>mostrar</button>
        {mostrar && <Clicker/>}
      
        <ItemCount stock={20}/>

      </Container>
     
      <Footer/>
      
    </div>
  );
}

export default App;
