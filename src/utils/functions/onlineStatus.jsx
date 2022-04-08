import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
// import functions & actions for notifying state of network connection
import { addNotification } from '../../Redux/notificationsSlice'
import { showToast } from './showToast'

/**
 * checks the status of the internet connection
 * @function OnlineStatus
 * @returns toast notification 
 */
const OnlineStatus = () => {

  const dispatch = useDispatch()

  // fetch with possibility to control timeout. website: https://dmitripavlutin.com/timeout-fetch-request/
  const fetchWithTimeout = async (resource, options = {}) => {
    const { timeout = 8000 } = options;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal  
    })
    clearTimeout(id)
    return response
  }

  // Check for internet connectivity
  const setOnline = () => {
    const status = navigator.onLine ? 'online' : 'offline';
    if (status === 'online') {
      fetchWithTimeout('https://www.google.com/', { 
            mode: 'no-cors',
            timeout: 5000
            })
        .then(() => {
          dispatch(addNotification(showToast('info', 'You Are Online')))
        }).catch(() => {
          dispatch(addNotification(showToast('warning', 'Internet Connectivity Issue')))
        })
  
    } else {
      dispatch(addNotification(showToast('warning', 'You Are Currently Offline !')))
    }
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