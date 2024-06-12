import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems : []
  },
  reducers: {
    add: (state, action) => {
      state.cartItems.push(action.payload);
    },
    remove: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
