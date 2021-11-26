import React from "react";


export const Item = (item) =>{

        return (
          
                    <div className="xl:w-1/3 md:w-1/2 p-4 w-50">
                            <div className="shadow-lg bg-gray-100 p-6 rounded-lg">
                                <img className="object-contain bg-placeholder h-40 rounded w-50 object-center mb-6" src={item.image} alt={item.title}/>
                                <h3 className="h-20 trackiong-widest text-grey-800 font-bold title-font" >{item.title}</h3>
                                <h2 className="text-lg text-red-600 font-medium title-font mb-4">{item.price}</h2>
                                <p className="leading-relaxed text-base">{item.description}</p>
                                <button className="btn btn-primary">Ver más</button>
                                
                            </div>
                    </div>
      
        )
}


