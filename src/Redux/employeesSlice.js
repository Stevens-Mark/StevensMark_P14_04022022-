// redux tool kit function
import { createSlice } from '@reduxjs/toolkit'
import { db } from '../FireBase/firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import mockData from '../assets/data/MOCK_DATA_FOR_TESTING.json'

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
    const collectionRef = collection(db, 'TEST')
    // const collectionRef = collection(db, 'employees')
    const snapshot = await getDocs(collectionRef)
    let datas = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id }))
    // IF ONLY ONE RECORD IN FIRESTORE (IE FOR FIRESTORE SETUP) THEN ADD MOCKDATA FOR DEMO: THIS MUST BE REMOVED FOR PRODUCTION!!
    if (datas.length <2) {datas =  mockData.forEach(element => {
      addAnEmployee(store, element)
    });}
     store.dispatch(resolved(datas))      // request resolved: save employees to store
  } catch (error) {  
    console.log(error)
    store.dispatch(rejected('Oops, something went wrong...')) // request rejected: error mesage
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
    const collectionRef = collection(db, 'TEST')
    // const collectionRef = collection(db, 'employees')
    const payload = input
    await addDoc(collectionRef, payload)
    const snapshot = await getDocs(collectionRef)
    const datas = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id }))
    store.dispatch(resolved(datas))      // request resolved: save employee to store
   } catch (error) {  
     console.log(error)
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