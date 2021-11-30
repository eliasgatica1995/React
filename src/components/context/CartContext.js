import { createContext, useState } from "react";
import React from "react";

export const CartContext = createContext() 


export const CartProvider = ({children}) =>{
     
  const [cart,setCart] = useState([])
  

  const agregarACarro = (item)=>{
    setCart([...cart, item])

  }
  const existeEnCarro =(id)=>{
    /*some devuelve true o false si existe o no*/
    return cart.some((el)=> el.id === id)
  }

  const totalItems=()=>{
     return cart.reduce((suma,elemento)=>suma + elemento.cantidad,0)
  }
  const vaciarCarro=()=>
  {
    setCart([])
  }

  const totalCompra =()=>{
    return cart.reduce((sumatotal,elemento)=>sumatotal+elemento.cantidad * elemento.precio,0)
  }

  const eliminarElemento =(id) =>{
        setCart(cart.filter((elemento)=>elemento.id !== id))
  }








    return(
        <CartContext.Provider value={{cart,agregarACarro,existeEnCarro,totalItems,vaciarCarro,totalCompra,eliminarElemento}}>

            {children}

        </CartContext.Provider>



    )
}