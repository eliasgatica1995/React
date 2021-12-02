import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import './CartView.css'
import {BsTrash} from 'react-icons/bs'

export const CartView = () => {

    const {cart,vaciarCarro,totalCompra,eliminarElemento}=useContext(CartContext)

    return (
        <div>
            { cart.length ===0
            ? <h2>Tu carro de compras esta vacio</h2>
            :    cart.map((elemento)=>(
                            <div key={elemento.id}  className="container mt-1 mb-1">
                                <div className="d-flex justify-content-center row">
                                    <div className="col-md-8">
                                        <div className="p-2">
                                    </div>
                                        <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                                            <div className="mr-1"><img className="rounded" src={elemento.imagen} width="40" alt={elemento.nombre}/></div>
                                            <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{elemento.nombre}</span>
                                            </div>
                                            <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger"></i>
                                                <h5 className="text-grey mt-1 mr-1 ml-1">{elemento.cantidad}</h5><i className="fa fa-plus text-success"></i>
                                            </div>
                                            <div className="align-items-center">
                                                <h5 className="text-grey mt-1 mr-1 ml-1 ">{elemento.precio}</h5>
                                            </div>
                                            <div className="d-flex align-items-center">
                                            <button className="btn btn-danger" onClick={()=>{eliminarElemento(elemento.id)}}><BsTrash/></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
            ))
            }
            <hr/>
            <h4>Total: ${totalCompra()}</h4>
            <button onClick={vaciarCarro} className={"btn btn-danger"}>Vaciar carrito</button>
            <Link to="/compra" className="btn btn-success mx-2">Terminar mi compra</Link>
        
        </div>



    )
}
