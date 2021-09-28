
import React from "react";
import { useEffect, useState } from "react";
import { GetById } from "../Api/product";
import { connect } from "react-redux";
import { AddToCart } from "../store/actions/action";

 function Product(props){

    const [product,setproduct] = useState({});
    const [loading,setloading] = useState(true);
    const [Quntity,setquntity] = useState(0); 
    
    useEffect(()=>{

        const id = parseInt(props.match.params.id);
        GetById(id)
            .then(data=>{
                setproduct(data);
                setloading(false);
            })
        


    },[])
    
    if(loading===true){
        return(
            <div>Loading...............</div>
        )
    }


    const handelQuntity =(e)=>{
        if(e.target.value >=0)
                setquntity(e.target.value);
    }

    const addToCart=(product)=>{
                

            props.addToCart(product,Quntity);


    }

    return(
        <div className='container mt-5'>
        <div className="row">
        <div className="col-6">

        <img src={"../"+product.image} alt={product.name}/>

        </div>

        <div className="col-6">
        <h1>{product.name}</h1>
        <p>{Quntity * product.price}$</p>

        <p>{product.description}</p>



        <input type="number" value={Quntity} onChange={handelQuntity} />
        <br />
            <p> Total: {

                Quntity * product.price


            }</p>
        <br/>
        <button className="btn btn-primary mt-3" onClick={()=>addToCart(product)}>ADD To Cart</button>

        </div>

        </div>

        </div>
    )

}

const mapDispatchToProps=(dispatch)=>{

    return{
        addToCart:(proInfo,quntity)=>dispatch(AddToCart(proInfo,quntity))
    }

}


export default connect(null,mapDispatchToProps)(Product);