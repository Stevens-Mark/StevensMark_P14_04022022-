import { useDispatch,  useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { selectOnlineStatus } from '../../Redux/selectors'
// import functions & actions for notifying state of network connection
import { addNotification } from '../../Redux/notificationsSlice'
import { showToast } from './showToast'
import { onLine, offLine } from '../../Redux/onlineStatusSlice'

/**
 * Periodically checks the status of the internet connection
 * @function OnlineStatus
 * @returns toast notification & boolean to redux store
 */
const OnlineStatus = () => {

  const dispatch = useDispatch()
  const online = useSelector(selectOnlineStatus).isOnline

  const setOnline = () => {
    dispatch(onLine())
    dispatch(addNotification(showToast('info', 'You Are Back Online')))
  }

  const setOffline = () => {
    dispatch(offLine())
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
    <span className='sr-only'>{online ? "Status: Online" : "Status: Offline"}</span>
  )
}

export default OnlineStatus