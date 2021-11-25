import React, {useEffect,useState} from "react";

export const Clicker = () => {

    const[clicks,setClicks] = useState(0) 

    const handleClick =() =>{
        setClicks(clicks+1)

    }
    //funcion y dependencias


    useEffect(() => {
        console.log("Clickmontado")
        return () =>{
            console.log("Desmontar desmontado")
        }
    },[clicks]
    )

    return (
        <div onClick={handleClick}>
        <h2>Clicks:{clicks} </h2>  
        <p> Ultimo click: {new Date().toLocaleString() }</p>
      
 
        </div>

         )
}