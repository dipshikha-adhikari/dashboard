export const initialState = {
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
    isUpdating:false 
}


export const reducer = (state,action) => {
switch(action.type){
    case 'ADD_USER' : {
        const newUser = action.payload 
       
                return {...state, users:[...state.users, newUser]}

    }
    case 'DELETE_USER':{
    //  let users = [...state.users]
     let updatedUsers = state.users.filter(u => u.id !== action.payload) 
    return   {...state, users:updatedUsers}
    }
    
    case 'EDIT_USER':{
     const users = [...state.users]
     const index = state.users.findIndex(user => user.id === action.payload.id)
      users[index] = action.payload
     return {...state, users}
    }
    
    case 'ADD_PRODUCT' : {
const newProduct = action.payload 
return {...state, products:[...state.products, newProduct]}
    }
    case 'DELETE_PRODUCT':{
const index = state.products.findIndex(user => user.id === action.payload)
const updatedProducts = state.products.filter((p,i) => i !== index)
return {...state, products:updatedProducts}
    }
    case 'EDIT_PRODUCT':{
const  products = [...state.products]
const index = products.findIndex(product => product.id === action.payload.id)
 products[index] = action.payload 
return{...state, products}
    }
    default: return state
}

}