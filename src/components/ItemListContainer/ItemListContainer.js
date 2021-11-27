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
        
          
                    <div>
                    {   loading
                    ? <h3>Cargando..</h3> 
                    :<ItemList items={items}/>                      
                    

                    }
                    </div>
            
            
     
        )
}