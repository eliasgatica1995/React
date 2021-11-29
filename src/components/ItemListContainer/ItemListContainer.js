import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {pedirDatos} from '../helper/pedirDatos'
import { ItemList } from "../ItemList/ItemList"


export const ItemListContainer = () =>{
    const [items,setItems] = useState([])
    const [loading, setLoading] = useState(false) 
    
    const {categoryId} = useParams()
        
        useEffect(() => {
            setLoading(true)
            pedirDatos()
                .then((resp) =>{
                    if (categoryId){
                        setItems(resp.filter((el)=>el.category === categoryId))
                    }else{
                        setItems(resp)
                    }
                })
                .catch((err) =>{
                    console.log(err)
                })
                .finally(()=>{
                   setLoading(false)
                })
        },[categoryId])

        return(
        
          
                    <div>
                    {   loading
                    ? <h3>Cargando..</h3> 
                    :<ItemList items={items}/>                      
                    

                    }
                    </div>
            
            
     
        )
}