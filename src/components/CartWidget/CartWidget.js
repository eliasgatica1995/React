import React, { useContext } from "react";
import {MdShoppingCart } from 'react-icons/md'
import { CartContext } from "../context/CartContext";
import './CartWidget.css'

export const CartWidget = () => {
    const {totalItems} = useContext(CartContext)
    
    if (totalItems() !== 0){
        return (
            <div className="cartWidget">
                    <MdShoppingCart/>
                    <span> {totalItems()} </span>
            </div>
     )}else
            return(<div></div>)
   
}