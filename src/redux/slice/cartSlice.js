import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: [],
   total:0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload.item;
            const items = state.items
            items.push(newItem)
            state.items = items;
        }
    }
});

export const { addToCart } = cartSlice.actions;