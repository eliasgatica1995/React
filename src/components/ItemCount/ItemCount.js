import React, {useEffect,useState} from "react";


export const ItemCount = ({stock}) => {

    const[cantidad, setCantidad ] = useState(0) 

    const handleRestar =() =>{
      (cantidad>0) && setCantidad( cantidad - 1 )
    }

    const handleSumar =() =>{
    cantidad<stock && setCantidad( cantidad + 1 )
     
     }
 

    return (
        <div className="m-4" > 
         
             <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
             <span className="m-2">{cantidad}</span>
              <button onClick={handleSumar} className="btn btn-primary">+</button>  
    
        </div>
       
     

         )
}