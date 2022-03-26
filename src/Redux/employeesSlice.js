// redux tool kit function
import { createSlice } from '@reduxjs/toolkit'
// import { db } from '../FireBase/firebase'
// import { addDoc, collection, getDocs } from 'firebase/firestore'
import axios from 'axios'

// import mockData from '../assets/data/MOCK_DATA_FOR_TESTING.json'

/**
 * API call
 * the function retrieves the employees records from db
 * @function fetchEmployees
 * @param {object} store 
 * @returns {object|string} employees information or error message to store
 */
export async function fetchEmployees(store) {
  store.dispatch(requesting())   // start the request
	try {
		const response = await axios.get("http://localhost:3000/api/v1/employees");
		console.log(response);
    const datas = await response.data
    console.log(datas)
    store.dispatch(resolved(datas))
	}
	catch (error) {
		console.log(error);
    store.dispatch(rejected('Oops, something went wrong...')) // request rejected: error mesage
	}
}

/**
 * API call
 * the function adds a new employee record to db
 * @function addAnEmployee
 * @param {object} store 
 * @returns {object|string} updated employees information or error message to store
 */
export async function addAnEmployee(store, input) {
  store.dispatch(requesting())  // start the update request
  try {
    const response = await axios.post('http://localhost:3000/api/v1/employees', input)
    const responseData = await response.data
    const datas = [responseData]
    console.log(datas)
    store.dispatch(resolved(datas))     // request resolved: save new name to store
  } catch (error) {
    store.dispatch(rejected('Oops, something went wrong...')) // request rejected: error mesage
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
  },
  reducers: { 
    requesting: (draft) => {
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

  },
})

export const { requesting, resolved, rejected, } = employeesSlice.actions
export default employeesSlice.reducer  // export each action & reducer