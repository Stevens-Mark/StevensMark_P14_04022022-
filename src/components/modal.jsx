import PropTypes from 'prop-types'
import { useEffect } from "react"
// svg icon as react component
import { ReactComponent as CloseButton } from '../assets/icons/close-x.svg'
// styling
import styled, { ThemeProvider , keyframes, css } from "styled-components"

/**
 * fade in keyframes
 */
 const modalopen = keyframes`
 from { opacity: 0; transform: translateY(-200px); }
 to { opacity: 1; }
`;

const fadeIn = keyframes`
 from { opacity: 0; }
 to   { opacity: 1; }
`;

/**
* CSS for the component using styled.components
*/
export const ModalWrapper = styled.div`
 align-items: center;
 animation: ${(props) => props.animation && css` ${fadeIn} 0.5s ease-out forwards`}}
 background-color: ${(props) => props.theme.pageBg? props.theme.pageBg : 'rgba(237, 240, 241, 0.8)'};
 bottom: 0;
 display: flex;
 height 100vh;
 height: 100vh;
 justify-content: center;
 left: 0;
 position: fixed;
 right: 0;
 top: 0;
 width: 100%;
 z-index: 1;
`;

export const ModalBody = styled.div`
 animation: ${(props) => props.animation && css` ${modalopen} 0.5s ease-out forwards`}}
 background-color: ${(props) => props.theme.modalBg? props.theme.modalBg : '#fff'};
 border-radius: ${(props) => props.theme.modalRadius==='false'? '0px' : '20px'};
 border: ${(props) => props.theme.modalBorder? props.theme.modalBorder : 'none'};
 box-shadow: ${(props) => props.theme.modalShadow? props.theme.modalShadow : 'rgba(0, 0, 0, 0.35) 0px 5px 15px'};
 color: ${(props) => props.theme.modalTxt? props.theme.modalTxt : '#000'};
 max-width: 25rem;
 position: relative;
 width: 100%;
`;

export const Close = styled.button`
 background: transparent;
 border: none;
 cursor: pointer;
 position: absolute;
 right: 1rem;
 top: 1rem;
`;

export const Content = styled.div`
 padding: 0.625rem 8%;
 text-align: center;

 p {
   font-weight: bold;
   font-size: 1.2rem;
 }

 img {
   width: clamp(5rem, 6vw, 7rem);
 }
`;
/**
 * Renders a confirmation modal
 * @function Modal
 * @param {function} closeModal: 
 * @param {object} modalTheme: colour theme for modal
 * @param {string} logo: optional logo
 * @param {string} heading: main heading
 * @param {string} message: optional shorter message
 * @param {boolean} animation: optionally animate modal or not
 * @returns {JSX}
 */
 const Modal = ( { closeModal, modalTheme, logo, heading, message, animation } ) => {

  const activeElement = document.activeElement

  const handleEscape = () => { closeModal()}
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
    document.querySelector('.modalButton').focus()
    return () => {
      document.removeEventListener('keydown', handleKeydown)  // Detach listener when component unmounts
      activeElement.focus()                                   // Return focus to the previously focused element
    }
  
  }, )

  return (
    <ThemeProvider theme={modalTheme}>
      <ModalWrapper animation={animation} role="dialog" aria-modal="true" aria-labelledby="modal__title">
        <ModalBody animation={animation}>   
          <Close data-testid="close" aria-label="Close" className='modalButton' onClick={() => closeModal()}>
            <CloseButton fill={modalTheme.modalBtnColor} stroke={modalTheme.modalBtnColor}/>
          </Close>
            <Content>
                {logo && <img src={logo} alt=""/> }
                <h1 id="modal__title">{heading}</h1>
                {message && <p>{message}</p> }
            </Content>
        </ModalBody>
      </ModalWrapper>
    </ThemeProvider>
  )
}

export default Modal

// Prototypes
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalTheme: PropTypes.object.isRequired,
  logo: PropTypes.string,
  heading: PropTypes.string.isRequired,
  message : PropTypes.string,
}



