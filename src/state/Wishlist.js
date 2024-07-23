import { createSlice } from "@reduxjs/toolkit";

export const Wishlist =createSlice({
    name:'Wishlist',
    initialState:{
        list1:[]
    },
    reducers:{
        addtolist:(state,action)=>{
          state.list1=action.payload; 
        }
    }

});
export default Wishlist.reducer;
export const {addtolist}=Wishlist.actions;