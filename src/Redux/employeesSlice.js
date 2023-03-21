// redux tool kit function
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
// import function & action to format the toast notification
import { showToast } from '../utils/functions/showToast'
import { addNotification } from './notificationsSlice'
// host address deployed (online) with Railway
const HOST = `https://${process.env.REACT_APP_SERVER_URL}/api/v1/employees`; 

// import mockData from '../assets/data/MOCK_DATA_FOR_TESTING.json' // mock data for testing
// const HOST = "http://localhost:3000/api/v1/employees" // host when running locally with local p14_backend server

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
		const response = await axios.get(HOST, {timeout: 6000})
    store.dispatch(resolved(response.data)) // resolved: fetched all employees to store
    store.dispatch(addNotification( showToast('info', 'Connected To Database')))
	}
	catch (error) {
    store.dispatch(rejected('No Connection To Database. Please reload page')) // rejected: error mesage
    store.dispatch(addNotification( showToast('danger', 'No Connection To Database')))
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
    const response = await axios.post(HOST, input, {timeout: 6000} )
    store.dispatch(addResolved(response.data))     // resolved: save new employee to store
    // store.dispatch(addNotification(showToast('success', 
    //               `ID: ${response.data.lastName}. Record Created`)))
  } catch (error) {
    store.dispatch(addRejected('Record not created ! Please try again'))
    store.dispatch(addNotification( showToast('danger', `ID: ${input.lastName}. Record Not Created !`)))
  }
}

/**
 * API call
 * the function updates an employee record in database
 * @function editAnEmployee
 * @param {object} store
 * @param {object} input: updated employee record
 * @returns {object|string} updated employee information or error message to store
 */
 export async function editAnEmployee(store, input) {
  store.dispatch(modifyRequesting())  // start the update request
  try {
    const response = await axios.put(`${HOST}/${input._id}`, input, {timeout: 6000})
    store.dispatch(modifyResolved(response.data))  // resolved: updated employee to store
    // store.dispatch(addNotification( showToast('success', 
    //               `ID: ${response.data.lastName}. Record Updated`)))
  } catch (error) {
    store.dispatch(modifyRejected('Record not updated ! Please try again'))
    store.dispatch(addNotification( showToast('danger', `ID: ${input.lastName}. Record Not Updated !`)))
  }
}

/**
 * API call
 * the function deletes an employee record from database
 * @function deleteAnEmployee
 * @param {object} store
 * @param {object} selected employee record to be deleted
 * @returns {object|string} updated employee information or error message to store
 */
export async function deleteAnEmployee(store, input) {
  store.dispatch(deleteRequesting())  // start the update request
  try {
    const response = await axios.delete(`${HOST}/${input._id}`, {timeout: 6000})
    store.dispatch(deleteResolved(response.data))  // resolved: delete employee from store
    store.dispatch(addNotification( showToast('success', `ID: ${input.lastName}. Record Deleted`)))
  } catch (error) {
    store.dispatch(deleteRejected(`Oops, something went wrong...`))
    store.dispatch(addNotification( showToast('danger', `ID: ${input.lastName}. Record Not Deleted !`)))
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
    isAddError: '',
    isModifyError: '',
    isDeleting: false,
    isDeleteError: ''
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
    rejected: (draft, action) => {
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
      draft.isAddError = ''
    },
    addRejected: (draft, action) => {
      draft.isLoading = false
      draft.isAddError = action.payload
    },
    modifyRequesting: (draft) => {     // modify employee
      draft.isLoading = true
    },
    modifyResolved: (draft, action) => {
      draft.isLoading = false
      draft.isModifyError = ''
      draft.employees = draft.employees.map((item) => {
        if (item._id === action.payload._id) {
          return Object.assign({}, item, action.payload )
        }
        return item
      })
    },
    modifyRejected: (draft, action) => {
      draft.isLoading = false
      draft.isModifyError = action.payload
    },
    deleteRequesting: (draft) => {     // delete employee
      draft.isDeleting = true
    },
    deleteResolved: (draft, action) => {
      draft.isDeleting = false
      draft.employees = draft.employees.filter((employee) => employee._id !== action.payload);
      draft.isDeleteError = ''
    },
    deleteRejected: (draft, action) => {
      draft.isDeleting = false
      draft.isDeleteError = action.payload
    },
  },
})

export const { requesting, resolved, rejected, addRequesting, addResolved, addRejected, 
  modifyRequesting, modifyResolved, modifyRejected,deleteRejected, deleteResolved, 
  deleteRequesting } = employeesSlice.actions
export default employeesSlice.reducer  // export each action & reducer