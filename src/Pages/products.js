import React,{useEffect, useState} from "react";
import ProductItem from "../components/productitem";
import { GetAll } from "../Api/product";


export default function Products(){

    const [products,setproducts]=useState([]);
    

    useEffect(()=>{

    GetAll()
        .then((Data)=> setproducts(Data))

    },[])



    return(
        <div>
        

       <div className="container">
       <h1>Prouduct</h1>
        <div className="row">


        {products.map((pro)=>{
            return (
                <div className="col-4" key={pro.id}>

                <ProductItem product={pro} />

                </div>
            )
        })}
                
                

        </div>

</div>

        </div>
    )
}