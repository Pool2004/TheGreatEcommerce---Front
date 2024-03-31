import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const items = state.items;
      items.push(newItem);
      let total = 0;
      items.forEach((item) => {
        total += item.precio;
      });
      state.items = items;
      state.total = total;
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const newItems = state.items.filter((item) => item.id !== itemId);
      let total = 0;
      newItems.forEach((item) => {
        total += item.precio;
      });
      state.items = newItems;
      state.total = total;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default createSlice.reducer;
