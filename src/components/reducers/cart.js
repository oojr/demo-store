import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { product } = action.payload;

      // Mutations are possible within this library because of immer implementation
      state.itemsInCart.push(product);
    },
    removeFromCart: (state, action) => {
      const { product } = action.payload;

      const filteredCart = state.itemsInCart.filter(
        (item) => item.id !== product.id
      );
      state.itemsInCart = filteredCart;
    },
    clearCart: (state, action) => {
      state.itemsInCart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, incrementByAmount } =
  cartSlice.actions;

export default cartSlice.reducer;
