import React, { useContext } from "react";
import {MdShoppingCart } from 'react-icons/md'
import { CartContext } from "../context/CartContext";
import './CartWidget.css'

export const CartWidget = () => {
    const {totalItems} = useContext(CartContext)
    return (
            <div className="cartWidget">
                <MdShoppingCart/>
                <span> {totalItems()} </span>
            </div>
    )
}