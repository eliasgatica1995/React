import React,{useEffect,useState} from "react";

export const FyH = ()=>{
    const [date,setDate] = useState(new Date())


    setInterval(() =>{
        setDate(new Date())
    },1000)

    return (<p>FyH: {date.toLocaleString()}</p>)
}