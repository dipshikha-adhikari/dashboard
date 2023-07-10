import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { students, teachers, toppers, transactionsData } from "./data";

export const initialState = {
    data: transactionsData,
    filteredData: transactionsData,
    statusFilter: 'status',
    teachers: teachers,
    students: students,
    toppers: toppers,
    isUpdating: false,
    studentsCount: 14,
    prevMonthStudentsCount: 10,
    prevYearStudentsCount: 5,
    teachersCount: 4,
    prevTeachersCount: 3,
    prevCourseCount: 400,
    courseCount: 392,
    isSidebarOpen: false
}


export const context = createContext(initialState)
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    return <context.Provider value={{ state, dispatch }}>
        {children}
    </context.Provider>
}