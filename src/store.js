import { configureStore } from "@reduxjs/toolkit";
import cartreducer from './reducer';
export const Store=configureStore({
    reducer:{
        cartreducer:cartreducer
    }
})