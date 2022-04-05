import { useSelector } from 'react-redux'
import { selectNotifications } from '../Redux/selectors'

// import component & position paramters etc..
import Toast from './Toast'
import { toastTheme } from '../styles/themes'

/**
 * Renders Notifications with defined display parameters
 * @function Notification
 * @returns {JSX} toasts
 */
const Notification = () => {
  const notifications = useSelector(selectNotifications) // Redux notification state
  return (
    <>
      {notifications &&
      <Toast 
        theme={toastTheme} 
        toastList={notifications}/>
      }
    </>
    )
  }

export default Notification