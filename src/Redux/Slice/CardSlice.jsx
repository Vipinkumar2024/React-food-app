import { createSlice } from '@reduxjs/toolkit';

const CardSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);

if (existingItem) {
  // If the item exists, update its quantity
  state.cart = state.cart.map((item) =>
    item.id === action.payload.id
      ? { ...item, qty: item.qty + 1 }
      : item
  );
} else {
  // If the item doesn't exist, add it to the cart
  state.cart.push({ ...action.payload, qty: 1 }); // Make sure to set an initial qty of 1
}
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);  // Removing item from cart by id
    }
  }
});

export const { addToCart, removeFromCart } = CardSlice.actions;
export default CardSlice.reducer;  // Correct export for reducers
