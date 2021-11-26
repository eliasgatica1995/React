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
        
            <section className="text-gray-600 body-font">
               
                <div className="container px-5 py-6 mx-auto">
                    <div className="flex flex-wrap sm:-m-4 -mx-8 -mb-10">
                    {   items?
                    <ItemList items={items}/>                      
                    : <h3>Cargando..</h3>

                    }
                    </div>
                </div>   
            
        </section>
        )
}