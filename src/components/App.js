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

      <div className="all">
<div className="col-lg-8"><h3>All Products</h3>
{all.length>0 && all.map((item,i)=>{
return <div className="item custom-card card" key={'a'+i}>
  <img src={item.images[0]} />
  <div className="card-body"> <p>${item.price}</p>
  <h4>{item.title}</h4>
  <button className="btn btn-primary" onClick={()=>handleaddtocart(item)}>Add to Cart</button>
 </div></div>
})}
</div>
<div><h3>Wishlists</h3>
{/* <div id="wishlists"> */}
{/* <div className="col-lg-8"><h3>Wishlists</h3></div> */}
<div id="wishlists" className="all col-lg-8">
{wishlist.length>0 && wishlist.map((item,i)=>{
return <div className="item custom-card card" key={'w'+i}>
  <img src={item.images[0]} />
  <p>${item.price}</p>
  <h4>{item.title}</h4>
  <button className="btn-primary btn" onClick={()=>handleaddtocart(item,'wishlist')}>Add to Cart</button>
</div>
})}
</div>
</div>
</div>
{/* <div><h3>Wishlists</h3></div> */}



<div id="cart" className="cart-total col-lg-8">
<h4>Cart ( {cart.length} Items)</h4>
<hr/>
{cart.length>0 && cart.map((item,i)=>{
return<div  className="cart custom-card card" key={'cart'+i}>
<img src={item.images[0]} />
{/* <div className="card-body"> */}
  {/* <div className="p-lastbtn"> */}
  <div className="details card-body"><p>Price:${item.price}</p>
  <h5>Product Name:{item.title}</h5></div>
  {/* <div className="last-btn"> */}
    <button className="btn" onClick={()=>handleincrement('dec',i,item)}>-</button>{count[i]}<button className="btn" onClick={()=>handleincrement('inc',i,item)}>+</button>
    {/* </div> */}
  {/* </div> */}
{/* <div className="btn1"> */}
<button className="btn btn-primary" onClick={()=>handlecartremove(item)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>Remove item</button>
<button className="btn" onClick={()=>handlewishlist(item)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>Move to Wishlist</button>
{/* </div> */}
{/* </div> */}
</div>}
)}
</div>


<div className="side-total col-lg-4">
  <div className="custom-card card">
<h5>The Total Amount Of</h5>
<hr/>
{cart.length>0 && cart.map((item,i)=>
{ return<div className="itemprice" key={'total'+i}>{i+1}. {item.title} <b>${item.price}</b>
</div>})}
<hr/>
{cart.length>0 && <div><p>Total: $$<b>{price}</b></p>
<button>Go to Checkout</button></div>}
<div className="coupon" onClick={()=>{setcoupon(coupon=>coupon?false:true)}}>Add a dicount code(optional)<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
</div>
{coupon && <div>
<p className="coupon">10% OFF with STYLENOW</p>
<p className="coupon">15% OFF with NOWORNEVER</p>
</div>}
</div></div>
        {/* Do not remove the main div */}
    </>
  )
}

export default App
