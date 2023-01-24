import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        totalPrice: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            // console.log(action.payload);// this has all the information 
            state.quantity += 1;
            state.products.push(action.payload); // payload has all the information  of the product 
            state.totalPrice += action.payload.price * action.payload.quantity;
        }
    },
});

export const { addProduct } = cartSlice.actions; // with this we export our  actions
export default cartSlice.reducer; // we export pur reducer and this is that we are goint to use it in our STORE, the name taht we put it in store is "cartReducer" 