import React,{useContext} from 'react'
import { useNavigate } from 'react-router'
import { CartContext } from '../context/CartContext'
import { useContador } from '../customCounter/useContador'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

export const ItemDetail = ({item}) => {
    /* El estado de la cantidad de elementos que quiero guardar lo tengo aca y al item count le paso las referencias para incrementar o decrementar*/    
    const{counter, increment, decrement } = useContador(1,item.stock,0) 
    /*consumo funcion de agregar al carro */
    const {agregarACarro,existeEnCarro} = useContext(CartContext)

    const navigate= useNavigate()
    const handleVolver =()=>{
        navigate(-1)
    }

    const agregar = () => {

    counter > 0 &&
       agregarACarro({
            id: item.id,
            nombre:item.title,
            precio:item.price,
            cantidad: counter,
            imagen:item.image
        })


    }


    return (
        <div className="col-8 m-2 card-body mx-auto">
                            <div className="shadow-lg bg-gray-100 p-6 rounded-lg h-100 d-flex flex-column ">
                                <div className="container-sm contenedorImagen"> 
                                    <img className="object-contain bg-placeholder h-20 rounded w-75 mx-auto d-block mb-6 mt-6  d-flex flex-wrap align-items-center" src={item.image} alt={item.title}/>
                               </div>
                                <h6>{item.title}</h6>
                                <h6>{item.price}</h6>
                                <p className="mx-3">{item.description}</p>
                                    {   !existeEnCarro(item.id)
                                        ? <ItemCount increment={increment} decrement={decrement} onAdd={agregar} counter={counter}/>
                                        :<Link to="/cart" className="btn btn-success mt-auto mx-auto mb-3">Terminar compra</Link>
                                    } 
                                    
                                <button type="button" className="btn btn-lg btn-block btn-outline-primary mt-auto mx-auto mb-3" onClick={handleVolver}>Volver</button>
                            </div>
        </div>
    )
}
