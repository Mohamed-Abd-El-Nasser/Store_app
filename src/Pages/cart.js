
import Cartitem from "../components/Cartitem";
import { connect } from "react-redux";
import { ClearCart } from "../store/actions/action";
function Cart(props){

   


    return(
        <div>
        

       <div className="container">
       <h1>Cart</h1>
        <div className="row">


        {props.products.map((pro,i)=>{
            return (
                <div className="col-3"  key={pro.products.id}>

                <Cartitem product={pro} index={i} />

                </div>
            )
        })}
                
                {/* <div className="col-3">

                <Cartitem product={props.products} />

                </div> */}

        </div>

        <p>Total: {props.total}$</p>
        <button className="btn d-block w-100 btn-primary" onClick={props.ClearCart }>Pay</button>

</div>

        </div>
    )
}

const mapStatToProps=(state)=>{

    const prod=[];
    state.cart.map((item)=> prod.push(item))
    return{
        products:prod,
        total:state.cart.reduce((total,item)=>total+item.quntity*item.products.price,0)
    }

}

const mapDispatchToProps=(dispatch)=>{

    return{
        ClearCart:()=>dispatch(ClearCart())
    }

}



export default connect(mapStatToProps,mapDispatchToProps)(Cart);