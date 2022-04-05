import React, { useEffect } from 'react'
import { useStore } from 'react-redux'
import PropTypes from 'prop-types'
// for styling
import styled, { ThemeProvider, css } from 'styled-components'
import colors from '../styles/colors'
// import 'animation' for toast
import { toastInRight, toastInLeft } from '../styles/keyframes'
import { removeNotification } from '../Redux/notificationsSlice'

/**
 * CSS
 */
const Container = styled.div`
  box-sizing: border-box;
  font-size: 0.875rem;
  position: fixed;
  z-index: 99999;
  top: ${(props) => props.theme.positionTop? props.theme.positionTop : null};
  bottom: ${(props) => props.theme.positionBottom? props.theme.positionBottom : null};
  left: ${(props) => props.theme.positionLeft? props.theme.positionLeft : null};
  right: ${(props) => props.theme.positonRight? props.theme.positonRight : null};
`;

const CloseBtn = styled.button`
  background: transparent;
  border: none;
  color: ${colors.tertiary};
  cursor: pointer;
  float: right;
  font-size: 1rem;
  font-weight: 700;
  // opacity: 0.8;
  position: relative;
  right: -0.7em;
  // text-shadow: 0 1px 0 ${colors.tertiary};
  top: -0.4em;
`;

const ToastBody = styled.div`
	color: ${colors.tertiary};
	padding: 1.25rem 0.938rem 0.625rem 0.625rem;
  animation: ${(props) => props.theme.enterInLeft? css` ${toastInLeft} .7s` : css` ${toastInRight} .7s`}}
  border-radius: 12px 3px 12px 3px;
  margin: 0 0 0.938rem;
  max-height: 6.25rem;
  // opacity: 0.9;
  overflow: hidden;
  padding: 10px 15px;
  pointer-events: auto;
  position: relative;
  transition: 0.3s ease;
  width: 17.5rem;
  &:hover {
    box-shadow: 0 0 5px ${colors.tertiary};
    opacity: 1;
  }
`;

const ToastImg = styled.img`
  float: left;
  height: 1.875rem;
  margin-right: 0.938rem;
  width: 1.875rem;
`;

const Title =styled.p`
  // height: 1.125rem;
  // width: 18.75rem;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.375rem;
  margin-top: 0;
  text-align: left;
`;

const Message =styled.p`
  height: 1.125rem;
  margin-left: -1px;
  margin: 0;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

/**
 * renders toast notifications with relevant message
 * @function Toast
 * @param {object} props 
 * @returns {JSX}
 */
const Toast = ( props ) => {

  const { toastList, theme } = props
  const store = useStore()
  
  useEffect(() => {                         // if autoDelete true & there's a notifcation, then delete
    const interval = setInterval(() => {   // the first one in the list (until all have been removed)
      if (theme.autoDelete && toastList.length) {
        deleteToast(toastList[0].id)
      }
    }, theme.deleteDelay)
    return () => {
      clearInterval(interval)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toastList, theme.autoDelete, theme.deleteDelay])

  /**
   * Remove chosen toast from the screen
   * @function deleteToast
   * @param {number} id of toast selected by user
   */
  const deleteToast = ( id ) => {
    store.dispatch(removeNotification(id))
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {toastList.map((toast, i) => 
          <ToastBody key={i} 
            style={{ backgroundColor: toast.backgroundColor }}>
               
            <CloseBtn aria-label="Close Notification" onClick={() => deleteToast(toast.id)}> X </CloseBtn>          
            <ToastImg src={toast.icon} alt="" />
            <Title>{toast.title}</Title>
            <Message>{toast.description}</Message>
           </ToastBody>
        )}
      </Container>
    </ThemeProvider>
  )
}

export default Toast

// proptypes

Toast.propTypes = {
  props: PropTypes.object,
}
