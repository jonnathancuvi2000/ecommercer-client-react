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
        },
        deleteData_products: (state) => {
            state.quantity = 0;
            state.products = [];
            state.totalPrice = 0;
        },
        updateProduct: (state, action) => {
            state.products = action.payload.datos;
            if (action.payload.type === 'incres') {
                state.totalPrice += action.payload.priceProduct;
            } else {
                state.totalPrice -= action.payload.priceProduct;
            }
            localStorage.setItem('productos', JSON.stringify(action.payload.datos));

            // const index = state.products.filter((item) => item._id === action.payload.product._id);

            // encuentro el index del producto
            // const index = state.products.filter((item) => item._id === action.payload.product._id);
            // return index;
            // if (index) {
            //     state.products[index] = action.payload.product;
            // }

            // actualizamos la canitdad del producto 
            // state.products[index] = action.payload
            // // remplzamos el prducto actualizado por el index
            // state.products[index] = productUpdated;
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((item) => item._id !== action.payload.product._id);
            state.quantity = state.quantity - 1;
            state.totalPrice = state.totalPrice - (action.payload.precio * action.payload.cantidad);
        },
    },
});

export const { addProduct, deleteData_products, updateProduct, removeProduct } = cartSlice.actions; // with this we export our  actions
export default cartSlice.reducer; // we export pur reducer and this is that we are goint to use it in our STORE, the name taht we put it in store is "cartReducer" 