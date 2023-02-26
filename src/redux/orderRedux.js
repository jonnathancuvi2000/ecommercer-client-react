import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'order-shipping',
    initialState: {
        userId: '',
        cartInfo: null,
        shippingInfo: null,
        paymet: ''
    },
    reducers: {
        addShippingInfo: (state, action) => {
            state.userId = action.payload.currentUserID;
            state.cartInfo = action.payload.cartInfo;
            state.shippingInfo = action.payload.shippingInfo;
        },
        addPayment: (state, action) => {
            state.paymet = action.payload.payment
        },
        deleteData_Order: (state) => {
            state.userId = '';
            state.cartInfo = null;
            state.shippingInfo = null;
            state.paymet = '';
        },


    }
})


export const { addShippingInfo, addPayment, deleteData_Order } = orderSlice.actions; // with this we export our  actions
export default orderSlice.reducer; // we export pur reducer and this is that we are goint to use it in our STORE, the name taht we put it in store is "cartReducer" 