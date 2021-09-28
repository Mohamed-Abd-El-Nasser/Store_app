import React from "react";

export default function ProductItem (props){

   const {product} = props;
    return(
    <div className="card mt-5" >
    <img src={product.image} className="card-img-top"  height="250px" alt="..." />
    <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price}$</p>
        <a href={"/products/" + product.id} className="btn btn-primary">Details</a>
    </div>
    </div>
    )
}