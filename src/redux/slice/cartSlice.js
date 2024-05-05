import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  totalItems: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const items = state.items;
      let total = 0;
      let totalItems = 0;

      const itemIndex = items.findIndex(
        (item) => item.idArticulo === newItem.idArticulo
      );

      if (itemIndex === -1) {
        newItem.cantidadComprar = 1;
        items.push(newItem);
      } else {
        if (items[itemIndex].cantidadComprar < items[itemIndex].cantidad) {
          items[itemIndex].cantidadComprar += 1;
        }
      }
      items.forEach((item) => {
        total += item.precio * item.cantidadComprar;
        totalItems += item.cantidadComprar;
      });

      state.items = items;
      state.total = total;
      state.totalItems = totalItems;
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
