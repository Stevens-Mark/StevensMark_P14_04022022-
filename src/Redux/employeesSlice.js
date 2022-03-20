// redux tool kit function
import { createSlice } from '@reduxjs/toolkit'
// import mockData from '../assets/data/MOCK_DATA_FOR_TESTING.json'

import { db } from '../FireBase/firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'

/**
 * API call
 * the function retrieves the employees records from store/firebase
 * @function fetchEmployees
 * @param {object} store 
 * @returns {object|string} employees information or error message to store
 */
 export async function fetchEmployees(store) {

  store.dispatch(requesting())   // start the request
  try {
    const collectionRef = collection(db, 'employees')
    const snapshot = await getDocs(collectionRef)
    const datas = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id }))
    store.dispatch(resolved(datas))      // request resolved: save employees to store
  } catch (error) {  
    store.dispatch(rejected(error.message)) // request rejected: error mesage
  }
}

/**
 * API call
 * the function adds a new employee record to store/firebase
 * @function addAnEmployee
 * @param {object} store 
 * @returns {object|string} updated employees information or error message to store
 */
 export async function addAnEmployee(store, input) {

  store.dispatch(requesting())   // start the request
  try {
    const collectionRef = collection(db, 'employees')
    const payload = input
    await addDoc(collectionRef, payload)
    const snapshot = await getDocs(collectionRef)
    const datas = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id }))
    store.dispatch(resolved(datas))      // request resolved: save employee to store
   } catch (error) {  
    store.dispatch(rejected(error.message)) // request rejected: error mesage
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