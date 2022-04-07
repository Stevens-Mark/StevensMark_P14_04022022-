import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
// for styling
import styled from 'styled-components'
import { selectTheme } from '../Redux/selectors'
import colors from '../styles/colors'
// import functions & actions for notifying state of network connection
import { addNotification } from '../Redux/notificationsSlice'
import { showToast } from '../utils/functions/showToast'
// import user logo
import user from '../assets/icons/user-circle-solid.svg'
import { onLine, offLine } from '../Redux/onlineStatusSlice'

/**
 * CSS for the component using styled.components
 */
 const Wrapper = styled.div`
  padding: 1rem;
  text-align: center;

  img {
    width: 2.813rem;
    height: 2.813rem;
    filter: ${({ theme }) => (theme === 'light' ? "invert(0%) sepia(0%) saturate(0%) hue-rotate(304deg) brightness(97%) contrast(103%)" : "invert(73%) sepia(75%) saturate(289%) hue-rotate(108deg) brightness(105%) contrast(102%)")};

  }
  h2 {
    margin: 0.5rem 0rem;
    font-size: clamp(1.2rem, 1.6vw, 1.5rem);
  }
`;

const IsError = styled.span`
  color: ${({ theme }) => (theme === 'light' ? `${colors.warning}` : `${colors.chromeBlue}`)};
  font-weight: bold;
  background: ${({ theme }) => (theme === 'light' ? `${colors.whiteAntique}` : `${colors.lightNavy}`)};
  border-radius: 8px;
  padding: 0rem 0.5rem;
`;

/**
 * Renders a Title on a page & online status notificaions
 * @function Title
 * @param {string} heading: to display
 * @returns {JSX}
 */
 const Title = ( { heading } ) => {

  const theme = useSelector(selectTheme) // retrieve Redux state & local state
  let [online, isOnline] = useState(navigator.onLine)
  const dispatch = useDispatch()

  const setOnline = () => {
    isOnline(true)
    dispatch(onLine())
    dispatch(addNotification(showToast('info', 'You Are Back Online')))
  }
  const setOffline = () => {
    isOnline(false)
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
    <Wrapper theme={theme}>
      <img src={user} alt=""/>
      <h2>{heading}</h2>
      {<IsError theme={theme}>Status: {online ? "Online" : "Offline - Check connection !"}</IsError>}
    </Wrapper> 
  )
}

export default Title

// Prototypes
Title.propTypes = {
  heading: PropTypes.string.isRequired,
}