import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";

const stateStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default stateStore;
