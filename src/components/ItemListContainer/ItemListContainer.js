import React, { useEffect, useState } from 'react'
import {pedirDatos} from '../helper/pedirDatos'
import { ItemList } from "../ItemList/ItemList"


export const ItemListContainer = ({greeting}) =>{
    const [items,setItems] = useState([])
        
      
        useEffect(() => {
            pedirDatos()
                .then((resp) =>{
                    setItems(resp)
                })
                .catch((err) =>{
                    console.log(err)
                })
                .finally(()=>{
                    console.log("Peticion finalizada")
                })
        },[])

        return(
            <div>
                <h2>{greeting}</h2>
                <hr/>
            {   items?
                <ItemList items={items}/>                      
                : <h3>Cargando</h3>

            }
            </div>
        )
}