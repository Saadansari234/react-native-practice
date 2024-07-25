import { combineReducers } from "redux";
import { addcart, userReducer } from "./Reducer";

const rootreducer = combineReducers({
  addcart,
  userReducer
  
})

export default rootreducer