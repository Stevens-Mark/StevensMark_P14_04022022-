// redux tool kit function
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { addNotification } from './notificationsSlice'
// import function to format the toast notification
import { showToast } from '../utils/functions/showToast'
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
    const datas = await response
    store.dispatch(resolved(datas.data)) // resolved: fetched all employees to store
    store.dispatch(addNotification( showToast('info', 'Employee Records Downloaded')))
	}
	catch (error) {
    store.dispatch(rejected('Oops, something went wrong... Please try again')) // rejected: error mesage
    store.dispatch(addNotification( showToast('danger', 'Oops, something went wrong...')))
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
    const responseData = await response
    store.dispatch(addResolved(responseData.data))     // resolved: save new employee to store
    store.dispatch(addNotification(showToast('success', 
                  `ID: ${responseData.data.lastName}. Record Created`)))
  } catch (error) {
    store.dispatch(addRejected('Oops, something went wrong... record not created !'))
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
    const response = await axios.put(`http://localhost:3000/api/v1/employees/${input._id}`, input)
    const responseData = await response
    store.dispatch(modifyResolved(responseData.data))  // resolved: updated employee to store
    store.dispatch(addNotification( showToast('success', 
                  `ID: ${responseData.data.lastName}. Record Updated`)))
  } catch (error) {
    store.dispatch(modifyRejected('Oops, something went wrong... record not updated !'))
    store.dispatch(addNotification( showToast('danger', `ID: ${input.lastName}. Record Not Updated !`)))
  }
}

/**
 * API call
 * the function deletes an employee record from database
 * @function deleteAnEmployee
 * @param {object} store
 * @param {number} selected employee record to be deleted
 * @returns {object|string} updated employee information or error message to store
 */
export async function deleteAnEmployee(store, input) {
  console.log(input)
  store.dispatch(deleteRequesting())  // start the update request
  try {
    const response = await axios.delete(`http://localhost:3000/api/v1/employees/${input._id}`)
    const responseData = await response
    store.dispatch(deleteResolved(responseData.data))  // resolved: delete employee from store
    store.dispatch(addNotification( showToast('success', `ID: ${input.lastName}. Record Deleted`)))
  } catch (error) {
    store.dispatch(deleteRejected('Error : record not deleted !'))
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