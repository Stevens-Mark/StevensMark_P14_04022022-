import Toast from './Toast'
import { toastTheme } from '../styles/themes'
import checkIcon from '../assets/icons/check.svg'
import errorIcon from '../assets/icons/error.svg'

const Notification = () => {

  const testList = [
    {
      id: 1,
      title: 'Success',
      description: 'This is a success toast component',
      backgroundColor: '#5cb85c',
      icon: checkIcon
    },
    {
      id: 2,
      title: 'Danger',
      description: 'This is an error toast component',
      backgroundColor: '#d9534f',
      icon: errorIcon
    },
];

  return (
    <Toast 
      theme={toastTheme} 
      toastList={testList}/>
    )
  }

export default Notification