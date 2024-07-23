import { configureStore } from "@reduxjs/toolkit";
import  Allslice  from "../state/Allproductslice";
import Cart from "../state/Cart";
import Wishlist from "../state/Wishlist";
export default configureStore({
    reducer:{
        total:Allslice,
        cart:Cart,
        list:Wishlist
    }
})