 
 // import icons
import checkIcon from '../../assets/icons/check.svg'
import errorIcon from '../../assets/icons/error.svg'
import infoIcon from '../../assets/icons/info.svg'
import warningIcon from '../../assets/icons/warning.svg'
 
/**
 * set the toast type to show based on the button clicked
 * @function showToast
 * @param {string} type (warning, info etc..)
 */
export const showToast = ( type , toast, setToast ) => {

  let toastProperties = null
  // randomly generates IDs for each toast notification used for delete functionality
  const id = Math.floor((Math.random() * 100) + 1)
  
  switch(type) {
    case 'success':
        toastProperties = {
            id,
            title: 'Success',
            description: 'This is a success toast component',
            backgroundColor: '#5cb85c',
            icon: checkIcon
        }
        break;
    case 'danger':
        toastProperties = {
            id,
            title: 'Danger',
            description: 'This is an error toast component',
            backgroundColor: '#d9534f',
            icon: errorIcon
        }
        break;
    case 'info':
        toastProperties = {
            id,
            title: 'Info',
            description: 'This is an info toast component',
            backgroundColor: '#5bc0de',
            icon: infoIcon
        }
        break;
    case 'warning':
        toastProperties = {
            id,
            title: 'Warning',
            description: 'This is a warning toast component',
            backgroundColor: '#f0ad4e',
            icon: warningIcon
        }
        break;
    default:
      setToast([])
  }
  setToast([...toast, toastProperties])
}
