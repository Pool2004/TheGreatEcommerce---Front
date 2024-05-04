import { configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "../slice/cartSlice";
import { userSlice } from "../slice/userSlice";

export const store = () => {
  return configureStore({
    reducer: {
      cart: cartSlice.reducer,
      user: userSlice.reducer,
    },
  });
};
