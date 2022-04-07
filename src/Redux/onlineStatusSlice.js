// redux tool kit function
import { createSlice } from '@reduxjs/toolkit'

/**
* Unify actions and reducers with Redux-Toolkit slices
* instead of createAction & createReducer
* create actions & reducer logic regarding adding an employee
* @function onlineSlice
* @param {object} state
* @param {string} action
* @returns {object} new state
*/
const onlineSlice = createSlice({
 name: 'onlineStatus',
 initialState: {
   isOnline: navigator.onLine
 },
 reducers: { 
   onLine: (draft) => {    
    draft.isOnline = true
   },
   offLine: (draft) => {    
    draft.isOnline = false
   },
 },
})

export const { onLine, offLine } = onlineSlice.actions
export default onlineSlice.reducer  // export each action & reducer