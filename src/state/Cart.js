import { createSlice } from "@reduxjs/toolkit";

export const Cart =createSlice({
    name:'Cart',
    initialState:{
        cart:[],
        total:0
    },
    reducers:{
        addtocart:(state,action)=>{
            console.log('hi in cart slice');
          state.cart=action.payload; 
        },
        settotal:(state,action)=>{
            state.total=action.payload;
        }
    }

})
export default Cart.reducer;
export const {addtocart,settotal}=Cart.actions;