import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// for styling
import styled from 'styled-components'
import colors from '../../styles/colors'
import { selectTheme } from '../../Redux/selectors'
// import up arrow for 'gototop' button
import upArrow from '../../assets/icons/circleUpArrow.svg'

/**
 * CSS for component using styled.components
 */

const TopButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: fixed;
  right: 1.25rem;
  top:auto;
  bottom: 5.2rem;
  transition: 0.4s;
  z-index: 9999;

  @media screen and (min-width: 329px) {
    bottom: 5rem; 
  }
  @media screen and (min-width: 1950px) {
    bottom: 5rem;
    left: 48.5%;
    right: 48.5%;
  }
`;

const ButtonImg = styled.img`
  border-radius: 50%;
  border: 2px solid ${colors.secondary};
  filter: ${({ theme }) => (theme === 'light' ? '' : 'invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)')}; 
  padding: 3px;
  width: clamp(1.5rem, 2.2vw, 2rem);

  &:hover {
    background: ${colors.primaryInverted};
    filter: invert(100%);
  }
`;

/**
* A 'go to top' button appears after scrolling down a distance
 * @function GoToTop
 * @returns {JSX} back to top button
 */
  // not need to cover this function by tests
   /* istanbul ignore next */
const GoToTop = () => {

  const theme = useSelector(selectTheme) // retrieve Redux state
  const [showButton, setShowButton] = useState(false)   // The back-to-top button is hidden at the beginning

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
    return () => setShowButton(false)
  }, [])

  // not need to cover this function by tests
  /* istanbul ignore next */
  const scrollToTop = () => {   // This function will scroll the window to the top 
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    })
  }
  
  return (
    <>       
      {showButton && (
        <TopButton onClick={scrollToTop}><ButtonImg theme={theme} src={upArrow} alt="Back to top arrow" title="Back To Top"/></TopButton>
      )}
  </>
  )
}

export default GoToTop