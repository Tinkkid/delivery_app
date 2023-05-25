import { createSlice } from '@reduxjs/toolkit';

const getFromLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return [];
  }
};

const setToLocalStorage = data => {
  localStorage.setItem('cart', JSON.stringify(data));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: getFromLocalStorage(),
    totalItems: 0,
    totalAmount: 0,
    totalDeliveryAmount: 1000,
  },
  reducers: {
    addToCart(state, action) {
      const cartItem = state.data.find(item => item.id === action.payload.id);
      if (cartItem) {
        const cartItem = state.data.map(item => {
          if (item.id === action.payload.id) {
            const newQuantity = item.quantity + action.payload.quantity;
            const newTotalPrice = newQuantity * item.price;
            return {
              ...item,
              quantity: newQuantity,
              totalPrice: newTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.data = cartItem;
        setToLocalStorage(state.data);
      } else {
        state.data.push(action.payload);
        setToLocalStorage(state.data);
      }
    },
    removeFromCart(state, action) {
      const cartItem = state.data.filter(item => item.id !== action.payload);
      state.data = cartItem;
      setToLocalStorage(state.data);
    },
    clearCart(state) {
      state.data = [];
      setToLocalStorage(state.data);
    },
    changeQuantity(state, action) {
      const cartItem = state.data.map(item => {
        if (item.id === action.payload.id) {
          let newQuantity = item.quantity;
          let newTotalPrice = item.totalPrice;
          if (action.payload.type === 'INC') {
            newQuantity++;
            newTotalPrice = newQuantity * item.price;
          }
          if (action.payload.type === 'DEC') {
            newQuantity--;
            if (newQuantity < 1) newQuantity = 1;
            newTotalPrice = newQuantity * item.price;
          }
          return { ...item, quantity: newQuantity, totalPrice: newTotalPrice };
        } else {
          return item;
        }
      });
      state.data = cartItem;
      setToLocalStorage(state.data);
    },
    getCartTotal(state) {
      state.totalAmount = state.data.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice);
      }, 0);
      state.totalItems = state.data.length;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  changeQuantity,
  getCartTotal,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
