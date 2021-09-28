import products from "./product.json";


export function GetAll(){
    return Promise.resolve(products);
}

export function GetById(id){

    const product = products.find(item=> item.id===id);

    return Promise.resolve(product)
}

const fs ={

    GetAll,
    
    GetById
}
export default fs;