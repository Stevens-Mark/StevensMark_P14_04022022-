import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../employeesSlice'
// import themeReducer from '../../features/theme'

// create the store & put all reducers together
export default configureStore({
    reducer: {
      employees: employeesReducer,
      // theme: themeReducer,
    },
})