import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { db } from '../../firebase/config'

import { ItemList } from "../ItemList/ItemList"
import { Loader } from '../Loader/Loader'
import { collection, getDocs, query, where} from 'firebase/firestore/lite'
export const ItemListContainer = () =>{
    const [items,setItems] = useState([])
    const [loading, setLoading] = useState(false) 
    
    const {categoryId} = useParams()
        

        useEffect(() => {
            setLoading(true)
            
            //crear referencia a coleccion
            const referenciaProd = collection(db,'productos')
            //de tener un categoryId busco segun su valor, pero si no tengo, la referencia es la misma que antes 
            const busqueda = categoryId ? query(referenciaProd,where('category','==',categoryId)) : referenciaProd

            getDocs(busqueda)
                .then(resp =>{
                    const productos = resp.docs.map((prod)=> {
                        return {
                            /*id y spread de la data del documento */
                            id:prod.id,
                            ...prod.data()
                        }
                    })
                    setItems(productos)
                    
                })
                .finally(()=>{setLoading(false)})


        },[categoryId])

        return(         
                    <div>
                    {   loading
                    ? <h3><Loader/></h3> 
                    :<ItemList items={items}/>                      
                    }
                    </div>
        )
}