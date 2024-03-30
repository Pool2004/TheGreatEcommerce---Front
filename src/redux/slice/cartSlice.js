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
  },
});

export const { addToCart } = cartSlice.actions;
export default createSlice.reducer;
