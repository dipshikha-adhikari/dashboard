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
    id:1,
    name:'Nike hoodie',
    price:'$45',
    img:'https://m.media-amazon.com/images/I/61xawq2UArL._AC_UF1000,1000_QL80_.jpg',
    inStock:'yes'
},
{
    id:2,
    name:'Adidas Cap',
    price:'$15',
    img:'https://assets.adidas.com/images/w_600,f_auto,q_auto/9382df3f01f54fbf9a14a9610123ec22_9366/Trefoil_Baseball_Cap_Black_EC3603_01_standard.jpg',
    inStock:'yes'
}
    ]
}


export const reducer = (state,action) => {
switch(action.type){
    case 'ADD_USER' : {

    }
    case 'DELETE_USER':{
        
    }
    
    case 'EDIT_USER':{
        
    }
    
    case 'ADD_PRODUCT' : {

    }
    case 'DELETE_PRODUCT':{

    }
    case 'EDIT_PRODUCT':{

    }
    default: return state
}

}