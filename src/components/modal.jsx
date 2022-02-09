import PropTypes from 'prop-types'
// styling
import styled, { keyframes } from 'styled-components'
import colors from '../styles/colors'
// logo icons
import close from '../assets/icons/close.svg'
import logo from '../assets/logos/wealthLogo.webp'

/**
 * Keyframes for about mobile heading
 */
export const modalopen = keyframes`
  from { opacity: 0;  transform: translateY(-150px); }
  to { opacity: 1; } transform: translateY(0px);}
`;

/**
 * CSS for the component using styled.components
 */
const MODAL = styled.div`
  // display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  // height: 100%;
  width: 100%;
  // overflow: auto;
  background-color: rgba(255, 255, 255, 0.9);
`;

const Content = styled.div`
  // margin: 5% auto;
  width: 100%;
  max-width: 400px;
  animation: modalopen 4s both ease-in-out;
  background-color: ${colors.primary};
  border-radius: 10px;
  // overflow: hidden;
  position: relative;
  color: ${colors.tertiary};

`;

const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  background: transparent;
  border: none;
  img {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;

const ModalBody = styled.div`
text-align: center;
  padding: 15px 8%;
  margin: 15px auto;
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
 const Modal = ( props ) => {

  const { setModalIsOpen } = props

  return (
    <MODAL>
      <Content>       
        <Close onClick={() => setModalIsOpen(false)}><img src={close} alt="Close button" /></Close>
          <ModalBody>
          <img src={logo} alt="Wealth Health"/>
              <h1>Success !</h1>
              <p>The new employee has been created</p>
          </ModalBody>
      </Content>
    </MODAL>
  )
}

export default Modal

// Prototypes
Modal.propTypes = {
  props: PropTypes.func,
}



