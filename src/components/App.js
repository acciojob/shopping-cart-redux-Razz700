import React, { useEffect, useState } from "react";
import './../styles/App.css';
//import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { setalldata } from "../state/Allproductslice";
import { addtocart } from "../state/Cart";
import { addtolist } from "../state/Wishlist";
const App = () => {
  const all=useSelector((state)=>state.total.all1);
  const dispatch=useDispatch();
  console.log(all);
 const cart=useSelector((state)=>state.cart.cart);
 const wishlist=useSelector((state)=>state.list.list1);

 
//     useEffect(()=>{
//     const completetdata=[{"id":632,"title":"Trustworthiness","price":186,"description":"Vitae labore sunt eo","images":["https://static.india.com/wp-content/uploads/2020/05/table-tennis.jpg?impolicy=Medium_Widthonly&w=700"],"creationAt":"2024-07-23T07:13:05.000Z","updatedAt":"2024-07-23T07:13:05.000Z","category":{"id":1,"name":"Clothes","image":"https://i.imgur.com/QkIa5tT.jpeg","creationAt":"2024-07-23T04:38:02.000Z","updatedAt":"2024-07-23T04:38:02.000Z"}},{"id":638,"title":"Quest","price":186,"description":"Vitae labore sunt eo","images":["https://static.india.com/wp-content/uploads/2020/05/table-tennis.jpg?impolicy=Medium_Widthonly&w=700"],"creationAt":"2024-07-23T07:13:06.000Z","updatedAt":"2024-07-23T07:13:06.000Z","category":{"id":4,"name":"Shoes","image":"https://api.escuelajs.co/api/v1/files/4184.jpg","creationAt":"2024-07-23T04:38:02.000Z","updatedAt":"2024-07-23T10:37:20.000Z"}},{"id":640,"title":"Uplift","price":186,"description":"Vitae labore sunt eo","images":["https://static.india.com/wp-content/uploads/2020/05/table-tennis.jpg?impolicy=Medium_Widthonly&w=700"],"creationAt":"2024-07-23T07:13:06.000Z","updatedAt":"2024-07-23T07:13:06.000Z","category":{"id":3,"name":"Furniture","image":"https://i.imgur.com/Qphac99.jpeg","creationAt":"2024-07-23T04:38:02.000Z","updatedAt":"2024-07-23T04:38:02.000Z"}},{"id":641,"title":"Ambit","price":186,"description":"Vitae labore sunt eo","images":["https://static.india.com/wp-content/uploads/2020/05/table-tennis.jpg?impolicy=Medium_Widthonly&w=700"],"creationAt":"2024-07-23T07:13:06.000Z","updatedAt":"2024-07-23T22:31:57.000Z","category":{"id":5,"name":"Miscellaneous","image":"https://i.imgur.com/BG8J0Fj.jpg","creationAt":"2024-07-23T04:38:02.000Z","updatedAt":"2024-07-23T04:38:02.000Z"}},{"id":643,"title":"Quest","price":186,"description":"Vitae labore sunt eo","images":["https://static.india.com/wp-content/uploads/2020/05/table-tennis.jpg?impolicy=Medium_Widthonly&w=700"],"creationAt":"2024-07-23T07:13:06.000Z","updatedAt":"2024-07-23T07:13:06.000Z","category":{"id":3,"name":"Furniture","image":"https://i.imgur.com/Qphac99.jpeg","creationAt":"2024-07-23T04:38:02.000Z","updatedAt":"2024-07-23T04:38:02.000Z"}}];
// //dispatch(setalldata(completetdata));
//       axios.request('https://api.escuelajs.co/api/v1/products').then((data)=>{
//         console.log(data);
//         const arrthis=data.data.slice(0,5);
//         console.log(arrthis,JSON.stringify(arrthis));
        
//         }).catch((e)=>{console.log(e);}); 
//   },[]);
const handleaddtocart=(item,check)=>{
  if (check=='wishlist') {
    const arr12=wishlist.filter((elem)=>item.title==elem.title);
    let arr1;
    cart.length>0?arr1=[...cart]:arr1=[];
    arr1.push(arr12[0]);
    dispatch(addtocart(arr1));
    const arrlist=wishlist.filter((elem)=>item.title!=elem.title);
    dispatch(addtolist(arrlist));
  }else{
    const arr=all.filter((elem)=>item.title==elem.title);
    let arr1;
    cart.length>0?arr1=[...cart]:arr1=[];
    arr1.push(arr[0]);
    console.log('arr1 in add to cart',arr1);
    dispatch(addtocart(arr1));
    const arrnew=all.filter((elem,i)=>item.title!=elem.title);
    dispatch(setalldata(arrnew));
  }
setprice(price=>price+parseInt(item.price));
}
const [price,setprice]=useState(0);
const handlecartremove=(item)=>{
const arr=cart.filter((elem)=>elem.title!=item.title);
dispatch(addtocart(arr));
const arrnew=[...all];
arrnew.push(item);
dispatch(setalldata(arrnew));
setprice(price=>price-parseInt(item.price));
}
const handlewishlist=(item)=>{
  const arr=cart.filter((elem)=>elem.title!=item.title);
dispatch(addtocart(arr));
let arrnew;
wishlist.length>0?arrnew=[...wishlist]:arrnew=[];
arrnew.push(item);
dispatch(addtolist(arrnew));
setprice(price=>price-parseInt(item.price));
}
const arrcount=[];
  for (let index = 0; index < 70; index++) {
  arrcount.push(1);
  }
const [count,setcount]=useState(arrcount);
const handleincrement=(val,i,item)=>{
if(val=='inc'){
  setcount(count=>{
   const arr=[...count];
   arr[i]++;
   return arr;
  });
  setprice(price=>price+=parseInt(item.price))
}else{
  console.log(item,'no');
count[i]!=1? setcount(count=>{
  const arr=[...count];
  arr[i]--;
  return arr;
 }):handlecartremove(item);
 if(count[i]!=1)setprice(price=>price-=parseInt(item.price));
}
}
const [coupon,setcoupon]=useState(false);

  return (
    <>
      <div className="navbar-expand-lg">
      <h2 className="text-center">Shopping Cart</h2> 
      </div> 

     
        {/* Do not remove the main div */}
    </>
  )
}

export default App
