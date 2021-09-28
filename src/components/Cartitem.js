import React from "react";
import { connect } from "react-redux";
import { RemoveFromCart } from "../store/actions/action";


function Cartitem (props){

    const {product,index} = props;


    return(
    <div className="card mt-5" >
    <img src={product.products.image} className="card-img-top"  height="250px" alt="..." />
    <div className="card-body">
        <h5 className="card-title">{product.products.name}</h5>
        <p className="card-text">Pric: {product.products.price}$</p>
        <p className="card-text">Quntity:{product.quntity}</p>
        <p className="card-text">Total: {product.products.price * product.quntity}$</p>
        <button  className="btn btn-danger" onClick={()=>props.removeFromCart(index)}><i className="fa fa-trash me-3"></i>Delete</button>
    </div>
    </div>
    )
}

const mapDispatchToProps=(dispatch)=>{

    return{
        removeFromCart:(index)=>dispatch(RemoveFromCart(index))
    }

}

export default connect(null,mapDispatchToProps)(Cartitem)