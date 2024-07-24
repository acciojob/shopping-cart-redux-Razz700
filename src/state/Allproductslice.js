import { createSlice } from "@reduxjs/toolkit";
export const Allslice=createSlice({
    name:'allproducts',
    initialState:{
    all1:[{"id":632,"title":"Trustworthiness","price":186,"description":"Vitae labore sunt eo","images":["https://static.india.com/wp-content/uploads/2020/05/table-tennis.jpg?impolicy=Medium_Widthonly&w=700"],"creationAt":"2024-07-23T07:13:05.000Z","updatedAt":"2024-07-23T07:13:05.000Z","category":{"id":1,"name":"Clothes","image":"https://i.imgur.com/QkIa5tT.jpeg","creationAt":"2024-07-23T04:38:02.000Z","updatedAt":"2024-07-23T04:38:02.000Z"}},{"id":638,"title":"Quest","price":186,"description":"Vitae labore sunt eo","images":["https://static.india.com/wp-content/uploads/2020/05/table-tennis.jpg?impolicy=Medium_Widthonly&w=700"],"creationAt":"2024-07-23T07:13:06.000Z","updatedAt":"2024-07-23T07:13:06.000Z","category":{"id":4,"name":"Shoes","image":"https://api.escuelajs.co/api/v1/files/4184.jpg","creationAt":"2024-07-23T04:38:02.000Z","updatedAt":"2024-07-23T10:37:20.000Z"}},{"id":640,"title":"Uplift","price":186,"description":"Vitae labore sunt eo","images":["https://static.india.com/wp-content/uploads/2020/05/table-tennis.jpg?impolicy=Medium_Widthonly&w=700"],"creationAt":"2024-07-23T07:13:06.000Z","updatedAt":"2024-07-23T07:13:06.000Z","category":{"id":3,"name":"Furniture","image":"https://i.imgur.com/Qphac99.jpeg","creationAt":"2024-07-23T04:38:02.000Z","updatedAt":"2024-07-23T04:38:02.000Z"}},{"id":641,"title":"Ambit","price":186,"description":"Vitae labore sunt eo","images":["https://static.india.com/wp-content/uploads/2020/05/table-tennis.jpg?impolicy=Medium_Widthonly&w=700"],"creationAt":"2024-07-23T07:13:06.000Z","updatedAt":"2024-07-23T22:31:57.000Z","category":{"id":5,"name":"Miscellaneous","image":"https://i.imgur.com/BG8J0Fj.jpg","creationAt":"2024-07-23T04:38:02.000Z","updatedAt":"2024-07-23T04:38:02.000Z"}},{"id":643,"title":"Quest","price":186,"description":"Vitae labore sunt eo","images":["https://static.india.com/wp-content/uploads/2020/05/table-tennis.jpg?impolicy=Medium_Widthonly&w=700"],"creationAt":"2024-07-23T07:13:06.000Z","updatedAt":"2024-07-23T07:13:06.000Z","category":{"id":3,"name":"Furniture","image":"https://i.imgur.com/Qphac99.jpeg","creationAt":"2024-07-23T04:38:02.000Z","updatedAt":"2024-07-23T04:38:02.000Z"}}]
 },
    reducers:{
     setalldata:(state,action)=>{
       state.all1=action.payload;
     }
    }
})
export const {setalldata}=Allslice.actions;
export default Allslice.reducer;