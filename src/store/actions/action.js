import { Add_To_Cart, Remove_From_Cart , Clear_Cart} from "./types";

export function AddToCart(proInfo,quantity){

                return {
                        type: Add_To_Cart,
                        proInfo,
                        quantity
                }
}
export function RemoveFromCart(index){
        return{
                type:Remove_From_Cart,
                index

        }
}
export function ClearCart(){
        return{
                type:Clear_Cart
        }
}

const d ={
        AddToCart,
        RemoveFromCart
}

export default d;