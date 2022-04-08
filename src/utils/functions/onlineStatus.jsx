import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
// import functions & actions for notifying state of network connection
import { addNotification } from '../../Redux/notificationsSlice'
import { showToast } from './showToast'

/**
 * Periodically checks the status of the internet connection
 * @function OnlineStatus
 * @returns toast notification & boolean to redux store
 */
const OnlineStatus = () => {

  const dispatch = useDispatch()

  const setOnline = () => {
    dispatch(addNotification(showToast('info', 'You Are Back Online')))
  }

  const setOffline = () => {
    dispatch(addNotification(showToast('warning', 'You Are Currently Offline !')))
  }

  // Register the event listeners
  useEffect(() => {
    window.addEventListener('offline', setOffline)
    window.addEventListener('online', setOnline)
    // cleanup if we unmount
    return () => {
      window.removeEventListener('offline', setOffline)
      window.removeEventListener('online', setOnline)
    }
  })

  return (
    <span className='sr-only'></span>
  )
}

export default OnlineStatus