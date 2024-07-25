import {takeEvery, put} from "redux-saga/effects";
import Action from "./Constant";

const {USER_LIST, SET_IMPORT_DATA} = Action

function* userList() {
    const url="https://dummyjson.com/users";
    let data = yield fetch(url)
    data= yield data.json()
    yield put({type:SET_IMPORT_DATA,data})
    // console.warn("data in saga", data) 
}


function* SagaData() {
    yield takeEvery(USER_LIST, userList);
}
export default SagaData