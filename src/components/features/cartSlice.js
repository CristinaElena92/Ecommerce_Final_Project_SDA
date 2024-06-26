
  
  















//------------------------------------------------------
// import { createSlice } from "@reduxjs/toolkit";

// export const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         cart: [],
//         totalAmount: 0,
//         totalPrice: 0,
//     },
//     reducers: {
//         addToCart(state, action) {
//             const product = action.payload;
//             const existingProductIndex = state.cart.findIndex(
//                 (item) => item.id === product.id && item.size === product.size
//             );

//             if (existingProductIndex !== -1) {
//                 state.cart[existingProductIndex].amount++;
//                 state.cart[existingProductIndex].totalPrice += product.price;
//             } else {
//                 state.cart.push({
//                     id: product.id,
//                     name: product.name, // Adaugă name pentru afișare
//                     price: product.price,
//                     size: product.size,
//                     amount: 1,
//                     totalPrice: product.price,
//                 });
//             }
//             state.totalAmount++;
//             state.totalPrice += product.price;
//         },
//     }
// });

// export const { addToCart } = cartSlice.actions;
// export default cartSlice.reducer;
