import { Add_To_Cart , Clear_Cart, Remove_From_Cart } from "../actions/types";




export default function cartReducer(state,action){

    switch(action.type){

        case Add_To_Cart:
                    return {
                        cart:[
                            ...state.cart,
                            {
                                products:action.proInfo,
                                quntity : action.quantity

                            }
                        ]
                    }
        case Remove_From_Cart:{
                    const index = action.index;
                    const newCart = [...state.cart];
                    newCart.splice(index,1);
                    return {
                        cart:[
                            ...newCart
                        ]
                    }
                
                }
        case Clear_Cart:{
            return{
                cart:[

                ]
            }
        }
        default: return state;
    }
}