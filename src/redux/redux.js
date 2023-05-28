import { createSlice } from "@reduxjs/toolkit";

const products = localStorage.getItem("products") !== null ? JSON.parse(localStorage.getItem("products")) : [];
const amount = localStorage.getItem("TotalAmount") !== null ? JSON.parse(localStorage.getItem("TotalAmount")) : 0;


const initialState = {
    products: products,
    amount: amount,
    total: 0,
    subtotal: 0,
}

const productSlice = createSlice({
   
    name: "cart",
    initialState,
    reducers:{
        addCart:(state, action) => {
            const newProduct = action.payload;
            const existance = state.products.find( item => item.id === newProduct.id)
            if(existance){
                existance.amount ++;
            }else{
                state.products.push({
                    id:newProduct.id,
                    image01: newProduct.image01,
                    title: newProduct.title,
                    price: newProduct.price,
                    amount: 1,
                    subtotal: newProduct.price,
                })
            }

            localStorage.setItem("products", JSON.stringify(state.products.map(item => item)));
            localStorage.setItem("TotalAmount", JSON.stringify(state.amount));
        },
        increase:(state, {payload}) =>{
            let products = state.products.find(item => item.id === payload.id);
            products.amount = products.amount + 1;
            products.subtotal = products.price * products.amount
            
            localStorage.setItem("products", JSON.stringify(state.products.map(item => item)));
            localStorage.setItem("TotalAmount", JSON.stringify(state.amount));
        },
        decrease:(state, {payload}) =>{
            let products = state.products.find(item => item.id === payload.id);
            products.amount = products.amount - 1;
            products.subtotal = products.price * products.amount
            
            localStorage.setItem("products", JSON.stringify(state.products.map(item => item)));
            localStorage.setItem("TotalAmount", JSON.stringify(state.amount));
        },
        calculateProducts : (state) =>{
            let total = 0;
            let amount = 0;
            state.products.forEach(itme =>{
                amount += itme.amount;
                total += itme.amount * itme.price;
            })
            state.amount = amount;
            state.total = total;    
    
        },
        deleteProducts:(state, action) =>{
           let productId = action.payload
           state.products = state.products.filter(item => item.id !== productId)
           
           localStorage.setItem("products", JSON.stringify(state.products.map(item => item)));
           localStorage.setItem("TotalAmount", JSON.stringify(state.amount));
        },
    },
    
})
export const {addCart, increase, decrease,deleteProducts, calculateProducts } = productSlice.actions;
export default productSlice.reducer;