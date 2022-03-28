// redux tool kit function
import { createSlice } from '@reduxjs/toolkit'
import { db } from '../FireBase/firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'
// import mockData from '../assets/data/MOCK_DATA_FOR_TESTING.json'

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
    // if (datas.length <2) {datas =  mockData.forEach(element => {   // add mockdata if only 'setup' record in firebase
    //   addAnEmployee(store, element)                                // FOR DEMO: MUST REMOVE FOR PRODUCTION!!
    // });}
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

  store.dispatch(addRequesting())   // start the request
  try {
    const collectionRef = collection(db, 'TEST')
    // const collectionRef = collection(db, 'employees')
    await addDoc(collectionRef, input)
    // const snapshot = await getDocs(collectionRef)
    // const datas = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id }))
    store.dispatch(addResolved(input))      // request resolved: save employee to store
   } catch (error) {  
     console.log(error)
    store.dispatch(addRejected('Oops, something went wrong...')) // request rejected: error mesage
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
    requesting: (draft) => {    // fetch data
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
  },
})

export const { requesting, resolved, rejected, addRequesting, addResolved, addRejected } = employeesSlice.actions
export default employeesSlice.reducer  // export each action & reducer