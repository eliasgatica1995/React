import React from "react";
import './Item.css'

export const Item = (item) =>{

        return (
          
                <div className="col-3 m-2 card-body ">
                            <div className="shadow-lg bg-gray-100 p-6 rounded-lg h-100 d-flex flex-column ">
                                <div className="container-sm contenedorImagen"> 
                                <img className="object-contain bg-placeholder h-20 rounded w-50 mx-auto d-block mb-6 d-flex flex-wrap align-items-center" src={item.image} alt={item.title}/>
                               </div>
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                               
                                <button type="button" className="btn btn-lg btn-block btn-outline-primary mt-auto mx-auto mb-3">Ver más</button>
                                
                            </div>
                </div>
      
        )
}


