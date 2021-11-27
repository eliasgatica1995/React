import React from 'react'
import {Item} from "../Item/Item"
export const ItemList = ({items=[]}) =>{

        return (

           
                   <div className="container row my-5 mx-auto">
                        {items.map((item,index) => 
                        <Item 
                            key={index} 
                            title={item.title}
                            price={item.price}
                            image = {item.image}
                            description={item.description}

                        />)}
                    </div>
                 
                
        
        )
}