import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './path-to-cart-slice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
       
    },
});

export default store;
