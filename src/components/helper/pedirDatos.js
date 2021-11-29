import {stock} from "../data/stock"

export const pedirDatos = ( )=> {
    return new Promise ((resolve,reject) =>{
            setTimeout(()=>{resolve(stock)
            },0)
    })
}

export const pedirItem = (id) => {
    return new Promise ((resolve,reject) =>{
        setTimeout(()=>{resolve(stock.find(el => el.id ===id))},0)
})
}
