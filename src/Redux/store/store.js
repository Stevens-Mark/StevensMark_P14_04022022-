import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../employeesSlice'
import themeReducer from '../themeSlice'

// create the store & put all reducers together
export default configureStore({
    reducer: {
      employees: employeesReducer,
      theme: themeReducer,
    },
})