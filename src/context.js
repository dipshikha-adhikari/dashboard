import React, { createContext, useReducer } from "react";
import {  reducer } from "./reducer";
import { orderData } from "./components/utils/data";

export const initialState = {
    data: orderData,
  filteredData: orderData,
  statusFilter: 'status',
    users:[
{
    id: 1, 
    username: 'bivash', 
    email: 'akbivash@gmail.com', 
    phone: '9807559979', 
    fullName: 'Bivash Adhikari',
    address:'Kathmandu'
},
{
    id: 2, 
    username: 'jessi7', 
    email: 'jessi@gmail.com', 
    phone: '9807562979', 
    fullName: 'Jessi Ale',
    address:'Banepa'
}
    ],
    products:[
{
    id:121,
    title:'Nike hoodie',
    price:'45',
    img:'https://m.media-amazon.com/images/I/61xawq2UArL._AC_UF1000,1000_QL80_.jpg',
    inStock:'yes'
},
{
    id:122,
    title:'Adidas Cap',
    price:'15',
    img:'https://assets.adidas.com/images/w_600,f_auto,q_auto/9382df3f01f54fbf9a14a9610123ec22_9366/Trefoil_Baseball_Cap_Black_EC3603_01_standard.jpg',
    inStock:'no'
}
    ],
    isUpdating:false ,
    userCount:1400,
    prevUserCount:1250,
    productCount:80,
    prevProductCount:90
}


export const context = createContext(initialState)
export const AppProvider = ({children}) =>{
const[state, dispatch] = useReducer(reducer, initialState)


return <context.Provider value={{state,dispatch}}>
    {children}
</context.Provider>
}