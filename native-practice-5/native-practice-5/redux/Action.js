import Action from "./Constant";

const {ADD_TO_CART, REM_FRM_CART, USER_LIST} = Action

export function AddToCart(item) {
    return{
        type: ADD_TO_CART,
        data: item
    }
}

export function RemoveFromCart(item) {
    return{
        type: REM_FRM_CART,
        data: item
    }
}

export function createUserList(item) {
    return{
        type: USER_LIST,
        data:item
    }
}