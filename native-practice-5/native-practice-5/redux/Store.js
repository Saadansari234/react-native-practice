import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./Rootreducer";
import  createSagaMiddlewere  from "redux-saga";
import SagaData from "./Saga";
const SagaMiddleware= createSagaMiddlewere()

const store= configureStore({
    reducer:rootreducer,
    middleware:()=> [SagaMiddleware]
})

SagaMiddleware.run(SagaData)

export default store