import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    allItems: [],
  },
  reducers: {
    add: (state, action) => {
      const isAlreadyInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (!isAlreadyInCart) {
        state.cartItems.push(action.payload);
      }
    },

    remove: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    setAllItems: (state, action) => {
      state.allItems = action.payload;
    },
    
  },
});

export const { add, remove, setAllItems, setIsAdded } = CartSlice.actions;
export default CartSlice.reducer;
