// redux tool kit function
import { createSlice } from '@reduxjs/toolkit'
import mockData from '../assets/data/MOCK_DATA.json'

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
  reducers: {     // reducers allows to define the actions and the reducer
    addEmployee: (draft, action) => {
        draft.employees.push(action.payload)
        
        // this used for DEMO only to allow store to persist in localStorage
        const employeesList = JSON.parse(localStorage.getItem('employees')) || []
        employeesList.push(action.payload)
        localStorage.setItem('employees', JSON.stringify(employeesList))
    },

    // this action used for DEMO only to allow store to persist in localStorage
    fetchEmployees: (draft) => {
      const employeesList = JSON.parse(localStorage.getItem('employees')) || []
      if (employeesList.length<1) {
        localStorage.setItem('employees', JSON.stringify(mockData)) }
        draft.employees = JSON.parse(localStorage.getItem('employees')) || []
    },

  },
})

export const { addEmployee, fetchEmployees } = employeesSlice.actions
export default employeesSlice.reducer  // export each action & reducer