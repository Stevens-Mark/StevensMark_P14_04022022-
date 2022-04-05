// redux tool kit function
import { createSlice } from '@reduxjs/toolkit'

/**
* Unify actions and reducers with Redux-Toolkit slices
* instead of createAction & createReducer
* create actions & reducer logic regarding adding an employee
* @function notifcation
* @param {object} state
* @param {string} action
* @returns {object} new state
*/
const notifcationsSlice = createSlice({
 name: 'notifcations',
 initialState: [],
 reducers: { 
   addNotification: (draft, action) => {    
    draft.push(action.payload)
   },
   removeNotification: (draft, action) => {
    const notificationIndex = draft.findIndex((notification) => notification.id !== action.payload.id)
    draft.splice(notificationIndex, 1)
   },
 },
})

export const { addNotification, removeNotification } = notifcationsSlice.actions
export default notifcationsSlice.reducer  // export each action & reducer