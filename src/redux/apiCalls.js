import { loginFailure, loginStart, loginSuccess } from './userSlice';
import { publicRequest, userRequest } from "../requestMethods";
import { deleteProductsFailure, deleteProductsStart, deleteProductsSuccess, getProductsFailure, getProductsStart, getProductsSuccess } from './productSlice';

export const login = async(dispatch, user) => {
dispatch(loginStart())

try{
    const response = await publicRequest.post('api/v1/auth/login', user)
    // console.log(JSON.stringify(response.headers))
dispatch(loginSuccess(response.data))
}catch(err){
    dispatch(loginFailure())
}
}

export const getProducts = async(dispatch) => {
    dispatch(getProductsStart)

    try{
        const response = await publicRequest.get('api/v1/products')
        dispatch(getProductsSuccess(response.data))
    }catch(err){
        dispatch(getProductsFailure)
    }
}

export const deleteProducts = async(id, dispatch) =>{
    dispatch(deleteProductsStart)
    try{
        dispatch(deleteProductsSuccess(id))
    }catch(err){
        console.log(err)
        dispatch(deleteProductsFailure())
    }
}