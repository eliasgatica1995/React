import React from 'react'
import {Item} from "../Item/Item"
export const ItemList = ({items=[]}) =>{

        return (

            <section className="text-gray-600 body-font">
               
                <div className="container px-5 py-6 mx-auto">
                    <div className="flex flex-wrap sm:-m-4 -mx-8 -mb-10">
                        {items.map((item,index) => 
                        <Item 
                            key={index} 
                            title={item.title}
                            price={item.price}
                            image = {item.image}
                            description={item.description}

                        />)}
                    </div>
                </div>   
                
            </section>
        )
}