import PropTypes from 'prop-types'
import { useEffect } from "react"
import { useSelector } from 'react-redux'
// styling
import styled from 'styled-components'
import colors from '../styles/colors'
import { selectTheme } from '../Redux/selectors'
// logo icons
import close from '../assets/icons/close.svg'
import logo from '../assets/logos/wealthLogo.webp'

/**
 * CSS for the component using styled.components
 */
const MODAL = styled.div`
  align-items: center;
  background-color: ${({ theme }) => (theme === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(168, 178, 209, 0.9)')};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const Content = styled.div`
  background-color: ${({ theme }) => (theme === 'light' ? `${colors.primary}` : `${colors.lightNavy}`)};
  border-radius: 10px;
  color: ${({ theme }) => (theme === 'light' ? `${colors.tertiary}` : `${colors.lightGreen}`)};
  max-width:  25rem;
  position: relative;
  width: 100%;
`;

const Close = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 0.938rem;
  top: 0.938rem;

  img {
    cursor: pointer;
    height: 0.938rem;
    width: 0.938rem;
  }
`;

const ModalBody = styled.div`
  margin: 0.938rem auto;
  padding: 0.938rem 8%;
  text-align: center;

  p {
    font-weight: bold;
    font-size: 1.2rem;
  }

  img {
    width: clamp(5rem, 6vw, 6rem);
  }
`;

/**
 * Renders the confirmation modal
 * @function Modal
 * @param {function} props: set state for isModalOpen
 * @returns {JSX}
 */
 const Modal = ( { setModalIsOpen } ) => {

  const theme = useSelector(selectTheme)  // retrieve Redux state

  const activeElement = document.activeElement

  const handleEscape = () => { setModalIsOpen(false) }
  const handlekeys = (e) => { e.preventDefault() }   // prevent keys: effectively traps focus in modal
  
  const keyListenersMap = new Map([   // map of keyboard listeners
    [27, handleEscape],
    [9, handlekeys],
    [18, handlekeys],
    [37, handlekeys],
    [38, handlekeys],
    [39, handlekeys],
    [40, handlekeys],
  ])

  const handleKeydown = (e) => {
    const listener = keyListenersMap.get(e.keyCode)  // get the listener corresponding to the pressed key  
    return listener && listener(e)                  // call the listener if it exists
  }
  
 useEffect(() => {   
    document.addEventListener('keydown', handleKeydown)
    document.querySelector('.modal').focus()
    return () => {
      document.removeEventListener('keydown', handleKeydown)  // Detach listener when component unmounts
      activeElement.focus()                                   // Return focus to the previously focused element
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MODAL theme={theme} role="dialog" aria-modal="true" aria-labelledby="modal__title">
      <Content theme={theme} >       
        <Close className='modal' onClick={() => setModalIsOpen(false)}><img src={close} alt="Close button" /></Close>
          <ModalBody>
          <img src={logo} alt=""/>
              <h1 id="modal__title">Success !</h1>
              <p>New employee record created</p>
          </ModalBody>
      </Content>
    </MODAL>
  )
}

export default Modal

// Prototypes
Modal.propTypes = {
  setModalIsOpen: PropTypes.func,
}



