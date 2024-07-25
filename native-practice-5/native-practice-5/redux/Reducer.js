import Action from "./Constant"
const initialState = {
    addtocart: [],
    usserinfo:[],
}

const {ADD_TO_CART,REM_FRM_CART,SET_IMPORT_DATA} = Action

const { addtocart, usserinfo } = initialState

export const addcart = (state = addtocart, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.data
            ]

        case REM_FRM_CART:
            const newCart = state.filter((item) => item !== action.data)
            return newCart

        // case SET_IMPORT_DATA:
        //      return[
        //         ...state,
        //         action.data
        //      ]

        default:
            return state
    }

}

export const userReducer=(state = usserinfo, action)=>{
    switch (action.type) {

        case SET_IMPORT_DATA:
             return[
                ...state,
                action.data
             ]

        default:
            return state
    }

}