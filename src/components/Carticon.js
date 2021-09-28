import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'
import './Carticon.css';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Carticon(props){

        return(
            <Link to="/Cart" className="cart_icon">
                <div className="d-flex ">
                <i className="fas fa-shopping-cart"></i>
                    <span className="badge bg-danger">{props.totalQuntity}</span>
                </div>
            </Link>
        )

}


const mapStatToProps =(state)=>{
    var total=0;
    let a= [];
                state.cart.map((item)=> a.push(item.quntity))

                for(var i = 0 ; i< a.length;i++){
                    total = total + parseInt(a[i]);
                }
                    

                return {
                    totalQuntity : total
                }

                

}

export default connect(mapStatToProps)(Carticon);