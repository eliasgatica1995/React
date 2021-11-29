import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import { pedirItem } from '../helper/pedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    
    const {itemId} = useParams()
    useEffect(() => {
        pedirItem( Number(itemId))
        .then(resp => setItem(resp))
    }, [])

    return (
        <div>
        { 
            item && <ItemDetail item={item}/>
         }
        </div>
    )
}
