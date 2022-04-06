 
import colors from '../../styles/colors'
 
/**
 * set the toast type to show with message
 * @function showToast
 * @param {string} type (warning, info etc..)
 * @param {string} message 
 */
export const showToast = ( type, message ) => {

  let toastProperties = null
  // randomly generates IDs for each toast notification used for delete functionality
  const id = Math.floor((Math.random() * 100) + 1)
  
  switch(type) {
    case 'success':
        toastProperties = {
            id,
            title: 'Success',
            description: message,
            backgroundColor: `${colors.success}`,
            icon: '✅'
        }
        break;
    case 'danger':
        toastProperties = {
            id,
            title: 'Danger',
            description: message,
            backgroundColor: `${colors.danger}`,
            icon: '⛔'
        }
        break;
    case 'info':
        toastProperties = {
            id,
            title: 'Info',
            description: message,
            backgroundColor: `${colors.info}`,
            icon: '☑️'
        }
        break;
    case 'warning':
        toastProperties = {
            id,
            title: 'Warning',
            description: message,
            backgroundColor: `${colors.warn}`,
            icon: '⚠️'
        }
        break;
    default:
        toastProperties = {}
  }
  return toastProperties
}
