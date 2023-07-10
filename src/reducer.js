
export const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_STUDENT': {
            const newStudent = action.payload
            const studentsCount = state.studentsCount + 1
            localStorage.setItem('students', {students: [...state.students, newStudent], studentsCount})
            return { ...state, students: [...state.students, newStudent], studentsCount }
        }
        case 'DELETE_STUDENT': {
            //  let studentss = [...state.studentss]
            const studentsCount = state.studentsCount - 1
            let updatedStudents = state.students.filter(u => u.id !== action.payload)
            return { ...state, students: updatedStudents, studentsCount }
        }

        case 'EDIT_STUDENT': {
            const students = [...state.students]
            const index = state.students.findIndex(students => students.id === action.payload.id)
            students[index] = action.payload
            return { ...state, students }
        }

        case 'ADD_TEACHER': {
            const newTeacher = action.payload
            const teachersCount = state.teachersCount + 1
            return { ...state, teachers: [...state.teachers, newTeacher], teachersCount }
        }

        case 'DELETE_TEACHER': {
            const teachersCount = state.teachersCount - 1
            const index = state.teachers.findIndex(teacher => teacher.id === action.payload)
            const updatedTeachers = state.teachers.filter((p, i) => i !== index)
            return { ...state, teachers: updatedTeachers, teachersCount }
        }
        case 'EDIT_TEACHER': {
            const teachers = [...state.teachers]
            const index = teachers.findIndex(teacher => teacher.id === action.payload.id)
            teachers[index] = action.payload
            return { ...state, teachers }
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
        case 'FILTER_BY_STATUS': {
            const filteredData = state.data.filter(item => {
                if (action.payload === 'all') {
                    return item
                } else {
                    return action.payload === item.status
                }

            })
            return { ...state, filteredData }

        }
        case 'CLOSE_SIDEBAR': {
            return {
                ...state,
                isSidebarOpen: false
            }
        }
        case 'OPEN_SIDEBAR': {
            return {
                ...state,
                isSidebarOpen: true
            }
        }
        default: return state
    }

}