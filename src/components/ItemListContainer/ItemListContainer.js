import React, { useEffect, useState } from 'react'
import {pedirDatos} from '../helper/pedirDatos'
import { ItemList } from "../ItemList/ItemList"


export const ItemListContainer = ({greeting}) =>{
    const [items,setItems] = useState([])
    const [loading, setLoading] = useState(false) 
      
        useEffect(() => {
            setLoading(true)
            pedirDatos()
                .then((resp) =>{
                    setItems(resp)
                })
                .catch((err) =>{
                    console.log(err)
                })
                .finally(()=>{
                   setLoading(false)
                })
        },[])

        return(
        
            <section className="text-gray-600 body-font">
               
                <div className="container px-5 py-6 mx-auto">
                    <div className="flex flex-wrap sm:-m-4 -mx-8 -mb-10">
                    {   loading
                    ? <h3>Cargando..</h3> 
                    :<ItemList items={items}/>                      
                    

                    }
                    </div>
                </div>   
            
        </section>
        )
}