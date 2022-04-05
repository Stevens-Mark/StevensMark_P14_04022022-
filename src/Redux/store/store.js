import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../employeesSlice'
import themeReducer from '../themeSlice'
import notificationsReducer from '../notificationsSlice'

// create the store & put all reducers together
export default configureStore({
    reducer: {
      employees: employeesReducer,
      notifications: notificationsReducer,
      theme: themeReducer,
    },
})