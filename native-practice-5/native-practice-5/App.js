import React from "react";
import { Provider } from "react-redux";
import store from "./redux/Store";



export default function App() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}



