import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
// for styling
import styled from 'styled-components'
import { selectTheme } from '../Redux/selectors'
import colors from '../styles/colors'
// import plugin for detecting network connection
import { Detector } from "react-detect-offline"
// import user logo
import user from '../assets/icons/user-circle-solid.svg'

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
 * Renders a Title on a page
 * @function Title
 * @param {string} heading: to display
 * @returns {JSX}
 */
 const Title = ( { heading } ) => {

  const theme = useSelector(selectTheme) // retrieve Redux state

  return (
    <Wrapper theme={theme}>
      <img src={user} alt=""/>
      <h2>{heading}</h2>
      <Detector render={({ online }) => (
        <IsError theme={theme}>Status: {online ? "Online" : "Offline - Check connection !"} </IsError> )} />
    </Wrapper> 
  )
}

export default Title

// Prototypes
Title.propTypes = {
  heading: PropTypes.string.isRequired,
}