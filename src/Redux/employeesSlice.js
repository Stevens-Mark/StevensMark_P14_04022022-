// redux tool kit function
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// import mockData from '../assets/data/MOCK_DATA_FOR_TESTING.json'

/**
 * API call
 * the function retrieves the employees records from the database
 * @function fetchEmployees
 * @param {object} store 
 * @returns {object|string} employees information or error message to store
 */
export async function fetchEmployees(store) {
  store.dispatch(requesting())   // start the request
	try {
		const response = await axios.get("http://localhost:3000/api/v1/employees");
    const datas = await response.data
    store.dispatch(resolved(datas)) // resolved: fetched all employees to store
	}
	catch (error) {
    store.dispatch(rejected('Oops, something went wrong... Please try again')) // rejected: error mesage
	}
}

/**
 * API call
 * the function adds a new employee record to database
 * @function addAnEmployee
 * @param {object} store
 * @param {object} new employee record 
 * @returns {object|string} new employee information or error message to store
 */
export async function addAnEmployee(store, input) {
  store.dispatch(addRequesting())  // start the update request
  try {
    const response = await axios.post('http://localhost:3000/api/v1/employees', input)
    const responseData = await response.data
    store.dispatch(addResolved(responseData))     // resolved: save new employee to store
  } catch (error) {
    store.dispatch(addRejected('Oops, something went wrong... record not created !')) 
  }
}

/**
 * API call
 * the function updates an employee record in database
 * @function editAnEmployee
 * @param {object} store
 * @param {object} id: updated employee record
 * @returns {object|string} updated employee information or error message to store
 */
 export async function editAnEmployee(store, input) {
   console.log(input)
  store.dispatch(modifyRequesting())  // start the update request
  try {
    const response = await axios.put(`http://localhost:3000/api/v1/employees/${input._id}`, input)
    const responseData = await response.data
    store.dispatch(modifyResolved(responseData))  // resolved: updated employee to store
  } catch (error) {
    store.dispatch(modifyRejected('Oops, something went wrong... record not updated !')) 
  }
}

/**
 * API call
 * the function deletes an employee record from database
 * @function deleteAnEmployee
 * @param {object} store
 * @param {number} id: of selected employee record
 * @returns {object|string} updated employee information or error message to store
 */
export async function deleteAnEmployee(store, id) {
  store.dispatch(deleteRequesting())  // start the update request
  try {
    const response = await axios.delete(`http://localhost:3000/api/v1/employees/${id}`)
    const responseData = await response.data
    store.dispatch(deleteResolved(responseData))  // resolved: delete employee from store
  } catch (error) {
    store.dispatch(deleteRejected('Oops, something went wrong... record not deleted !')) 
  }
}

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
    isLoading: false,
    employees: [],
    isError: '',
    isModifyError: ''
  },
  reducers: { 
    requesting: (draft) => {    // fetch all employees data
      draft.isLoading = true
    },
    resolved: (draft, action) => {
        draft.isLoading = false
        draft.employees = action.payload
        draft.isError = ''
    },
    rejected:  (draft, action) => {
        draft.isLoading = false
        draft.employees = []
        draft.isError = action.payload
    }, 
    addRequesting: (draft) => {     // add new employee
      draft.isLoading = true
    },
    addResolved: (draft, action) => {
        draft.isLoading = false
        draft.employees.push(action.payload)
        draft.isError = ''
    },
    addRejected: (draft, action) => {
        draft.isLoading = false
        draft.isError = action.payload
    },
    modifyRequesting: (draft) => {     // modify employee
      draft.isLoading = true
    },
    modifyResolved: (draft, action) => {
        draft.isLoading = false
        draft.employees.push(action.payload)
        draft.isModifyError = ''
    },
    modifyRejected: (draft, action) => {
        draft.isLoading = false
        draft.isModifyError = action.payload
    },
    deleteRequesting: (draft) => {     // delete employee
      draft.isLoading = true
    },
    deleteResolved: (draft, action) => {
        draft.isLoading = false
        draft.employees = draft.employees.filter((employee) => employee._id !== action.payload);
        draft.isError = ''
    },
    deleteRejected: (draft, action) => {
        draft.isLoading = false
        draft.isError = action.payload
    },
  },
})

export const { requesting, resolved, rejected, addRequesting, addResolved, addRejected, 
  modifyRequesting, modifyResolved, modifyRejected,deleteRejected, deleteResolved, 
  deleteRequesting } = employeesSlice.actions
export default employeesSlice.reducer  // export each action & reducer