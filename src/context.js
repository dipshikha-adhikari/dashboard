import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const context = createContext(initialState)
export const AppProvider = ({children}) =>{
const[state, dispatch] = useReducer(reducer, initialState)
return <context.Provider value={{state,dispatch}}>
    {children}
</context.Provider>
}