import React from "react";
export const Container = ({children}) =>{

    return (
        <section className="justify-content-center">
           
            <h2>Contenedor</h2>
            <hr></hr>
            {children}

        </section>
    )
}