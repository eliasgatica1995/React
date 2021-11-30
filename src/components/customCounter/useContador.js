import React, { useState } from 'react'

export const useContador = (inicial = 0, maximo, minimo) => {

    const [counter, setCounter] = useState(inicial)
    const decrement = () => {
        counter > minimo && setCounter( counter - 1)
    }
    const increment = () => {
        counter < maximo && setCounter( counter + 1)
    }

    

    return {
        counter,
        increment,
        decrement
    }
}