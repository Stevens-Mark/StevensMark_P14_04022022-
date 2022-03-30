// redux tool kit function
import { createSlice } from '@reduxjs/toolkit'
import mockData from '../assets/data/MOCK_DATA_FOR_TESTING.json'

/**
 * Unify actions and reducers with Redux-Toolkit slices
 * instead of createAction & createReducer
 * create actions & reducer logic regarding adding an employee
 * @function employeesSlice
 * @param {object} state
 * @param {string} action
 * @returns {object} new state
 */
 const employeesSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: [],
  },
  reducers: { 
    addEmployee: (draft, action) => {
      // draft.employees.push(action.payload)  // add new employee to redux store

      // allow data/store to persist in localStorage 
      const employeesList = JSON.parse(localStorage.getItem('employees')) || [] 
      employeesList.push(action.payload)
      localStorage.setItem('employees', JSON.stringify(employeesList))    
      draft.employees = JSON.parse(localStorage.getItem('employees'))
    },

    fetchEmployees: (draft) => {
      // draft.employees = mockData

      const employeesList = JSON.parse(localStorage.getItem('employees')) || []
      // if no 'REAL' employee records already held in local storage then load with mocked data (for demo)
      if (employeesList.length<1) {           
        localStorage.setItem('employees', JSON.stringify(mockData))                   
       }
        draft.employees = JSON.parse(localStorage.getItem('employees')) || []   
    },

  },
})

export const { addEmployee, fetchEmployees } = employeesSlice.actions
export default employeesSlice.reducer  // export each action & reducer