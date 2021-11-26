import React, { useState,useEffect } from "react";


export const PostApi = ()=>{
   
    const [post,setPost] = useState(null)
  
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((data) => {
            setPost(data)
        })
    },[])
    return (
            <div className="container">
              {post ?
                <>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </>
                    :<h2>Cargando...</h2>
              }
            </div> 
        
    )
}   