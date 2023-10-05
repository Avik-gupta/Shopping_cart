import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productSlice";

const store = configureStore({
    reducer:{
        productCart:ProductReducer
    }
      
})
export default store