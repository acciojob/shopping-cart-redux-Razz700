import { createSlice } from "@reduxjs/toolkit";
export const Allslice=createSlice({
    name:'allproducts',
    initialState:{
    all1:[]
    },
    reducers:{
     setalldata:(state,action)=>{
       state.all1=action.payload;
     }
    }
})
export const {setalldata}=Allslice.actions;
export default Allslice.reducer;