import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Timestamp, collection, addDoc} from 'firebase/firestore/lite'
import { db } from '../../firebase/config'
import { Link } from 'react-router-dom'


export const Comprar = () => {

  const [orderId,setOrderId] = useState(null)
  const {cart,totalCompra,vaciarCarro} = useContext(CartContext)

  const [values, setValues] = useState({
    nombre: '',
    email: '',
    emailRep:'',
    telefono:''
  
})

  const generarOrden = (compradorDatos) =>{

    const ordenDeCompra ={
        comprador: compradorDatos,
        items: cart,
        totalCompra:totalCompra(),
        fecha: Timestamp.fromDate(new Date())
    }

    const refOrder = collection(db,'ordenes')

    /*ref a base y elemento a agregar */
      addDoc(refOrder,ordenDeCompra)
          .then((respuesta) => {
              
            setOrderId(respuesta.id)
            vaciarCarro()

          })
          console.log(ordenDeCompra)
  }

  const handleInputChange = (e) => {
    setValues({
        /*guardo valores anteriores y sobreescribo el que cambia */
        ...values,
        /*con e.target.name puedo acceder al atributo que me corresponde*/
        [e.target.name]: e.target.value
    })
}

  const handleSubmit = (e) => {
    e.preventDefault()
  
    if (values.nombre.length > 5 && values.email.length > 10 ){
        if ((values.nombre.length <= 30 && values.email.length <= 40 ))
            if (values.email === values.emailRep)
                    generarOrden(values)
            else{alert("El email debe coincidir")}
    } else {
        alert("Campos no válidos")
    }
    }

  return (

    <div className="container my-5 mx-auto">
        { orderId
            ?<div>
                <h2> Compra finalizada</h2>
                <p>Id de compra: {orderId}</p>
                <Link to="/" className="btn btn-primary"> Volver</Link>
             </div>

            :    
                <div>
                      <form onSubmit={handleSubmit}>
                                <input
                                    value={values.nombre}
                                    onChange={handleInputChange}
                                    name="nombre"
                                    className="form-control my-2 mx-auto"
                                    placeholder="Nombre y apellido"
                                    type="text"
                                />
                                <input
                                    value={values.telefono}
                                    onChange={handleInputChange}
                                    name="telefono"
                                    className="form-control my-2 mx-auto"
                                    placeholder="Teléfono"
                                    type="tel"
                                />
                                <input
                                    value={values.email}
                                    onChange={handleInputChange}
                                    name="email"
                                    className="form-control my-2 mx-auto"
                                    placeholder="Email"
                                    type="email"
                                />
                                <input
                                    value={values.emailRep}
                                    onChange={handleInputChange}
                                    name="emailRep"
                                    className="form-control my-2 mx-auto"
                                    placeholder="Por favor repita su Email"
                                    type="email"
                                />

                                <button type="submit" className="btn btn-success my-5">Enviar</button>
                            </form>

                     <button className="btn btn-success my-5" onClick={generarOrden}>Finalizar</button>
                </div>

        }
        
       
    </div>

)








        
}



