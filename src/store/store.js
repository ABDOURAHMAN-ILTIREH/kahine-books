import { configureStore } from "@reduxjs/toolkit";
import cartReducer from  "../redux/redux"



export const store = configureStore({
  reducer:{
     cart: cartReducer,
  }
})