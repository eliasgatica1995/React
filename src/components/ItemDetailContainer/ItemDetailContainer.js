import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import { pedirItem } from '../helper/pedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()
    useEffect(() => {
        setLoading(true)
        pedirItem( Number(itemId))
        .then(resp => setItem(resp))
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        <div>
        {   loading
                    ? <h2>Cargando...</h2>
                    : item && <ItemDetail item={item}/>
         }
        </div>
    )
}
