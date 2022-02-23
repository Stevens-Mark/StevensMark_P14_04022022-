import PropTypes from 'prop-types'
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
  const theme = useSelector(selectTheme) // retrieve Redux state

  return (
    <MODAL theme={theme}>
      <Content theme={theme}>       
        <Close onClick={() => setModalIsOpen(false)}><img src={close} alt="Close button" /></Close>
          <ModalBody>
          <img src={logo} alt="Wealth Health"/>
              <h1>Success !</h1>
              <p>A new employee record has been created</p>
          </ModalBody>
      </Content>
    </MODAL>
  )
}

export default Modal

// Prototypes
Modal.propTypes = {
  props: PropTypes.func.isRequired,
}



