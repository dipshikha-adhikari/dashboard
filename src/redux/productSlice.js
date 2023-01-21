import {createSlice} from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name:'products',
    initialState:{
products:[],
isFetching:false,
isError:false
    },
    reducers:{
getProductsStart:(state) => {
    state.isFetching = true 
    state.isError = false
},
getProductsSuccess:(state, action) => {
    state.isFetching = false
    state.products = action.payload
},
getProductsFailure:(state) => {
    state.isFetching = false
    state.isError = true
},
    deleteProductsStart:(state) => {
        state.isFetching= true
        state.isError = false
    },
    deleteProductsSuccess:(state,action) => {
        state.isFetching= false
        state.products.splice(
            state.products.findIndex(item => item._id ===action.payload), 1
        )
    },
    deleteProductsFailure:(state) => {
        state.isFetching= false
        state.isError = false
    }
}
    
})

export const{getProductsStart,getProductsSuccess,getProductsFailure, deleteProductsStart, deleteProductsSuccess, deleteProductsFailure} = productSlice.actions
export default productSlice.reducer