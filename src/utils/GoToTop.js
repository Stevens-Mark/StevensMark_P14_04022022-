import { useEffect, useState } from 'react'
// for styling
import styled from 'styled-components'
import colors from '../styles/colors'
import upArrow from '../assets/icons/circleUpArrow.svg'

/**
 * CSS for component using styled.components
 */
const ToTopButton = styled.img`
  position: fixed;
  z-index: 9999;
  top:auto;
  bottom: 1rem;
  right: 1.25rem;
  width: clamp(1.5rem, 2.2vw, 2rem);
  padding: 3px;
  filter: invert(29%) sepia(72%) saturate(4967%) hue-rotate(198deg) brightness(88%) contrast(103%);
  border: 2px solid ${colors.secondary};
  cursor: pointer;
  border-radius: 50%;
  transition: 0.4s;
 
  &:hover {
    background: ${colors.primaryInverted};
    filter: invert(100%);
  }

  @media screen and (min-width: 1950px) {
    left: 50%;
    transform: translate(-50%, 0); 
    bottom: 9rem;
  }
`;

/**
* A go to top button appears after scrolling down a distance
 * @function GoToTop
 * @returns {JSX} back to top button
 */
const GoToTop = () => {

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
    
  const scrollToTop = () => {   // This function will scroll the window to the top 
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    })
  }
  
  return (
    <>       
      {showButton && (
        <ToTopButton onClick={scrollToTop} src={upArrow} alt="Back to top arrow" title="Back To Top"/>
      )}
  </>
  )
}

export default GoToTop