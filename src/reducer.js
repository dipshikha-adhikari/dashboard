
export const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_USER': {
            const newUser = action.payload
            const userCount = state.userCount + 1
            return { ...state, users: [...state.users, newUser], userCount }
        }
        case 'DELETE_USER': {
            //  let users = [...state.users]
            const userCount = state.userCount - 1
            let updatedUsers = state.users.filter(u => u.id !== action.payload)
            return { ...state, users: updatedUsers, userCount }
        }

        case 'EDIT_USER': {
            const users = [...state.users]
            const index = state.users.findIndex(user => user.id === action.payload.id)
            users[index] = action.payload
            return { ...state, users }
        }

        case 'ADD_PRODUCT': {
            const newProduct = action.payload
            const productCount = state.productCount + 1
            return { ...state, products: [...state.products, newProduct], productCount }
        }

        case 'DELETE_PRODUCT': {
            const productCount = state.productCount - 1
            const index = state.products.findIndex(user => user.id === action.payload)
            const updatedProducts = state.products.filter((p, i) => i !== index)
            return { ...state, products: updatedProducts, productCount }
        }
        case 'EDIT_PRODUCT': {
            const products = [...state.products]
            const index = products.findIndex(product => product.id === action.payload.id)
            products[index] = action.payload
            return { ...state, products }
        }
        case 'FILTER_BY_NAME': {
            const filterKey = action.payload
            if (filterKey === "") {
                return { ...state };
            } else {
                const filteredData = state.data.filter(item => { return item.name.toLowerCase().includes(filterKey) }
                );
                return { ...state, filteredData };
            }
        }
        case 'FILTER_BY_STATUS' : {
const filteredData = state.data.filter(item => {
   if(action.payload === 'all'){
    return item
   }else{
return action.payload === item.status
   }
  
})
return {...state, filteredData}
}

        default: return state
    }

}