import { collection,doc,getDoc } from 'firebase/firestore/lite'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import { db } from '../../firebase/config'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Loader } from '../Loader/Loader'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()
    useEffect(() => {
        setLoading(true)

        const referenciaProd = collection(db,'productos')
        const documentoR = doc(referenciaProd,itemId)

        getDoc(documentoR)
            .then((docR)=>{
                setItem({
                    id:docR.id,
                    ...docR.data()
                })
            })
            .finally(()=>{setLoading(false)})

    }, [itemId])

    return (
        <div>
        {   loading
                    ? <h3><Loader/></h3>
                    : item && <ItemDetail item={item}/>
         }
        </div>
    )
}
