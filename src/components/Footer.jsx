import { useDispatch, useSelector } from 'react-redux'
// for styling
import styled from 'styled-components'
import colors from '../styles/colors'
import { selectTheme } from '../Redux/selectors'
// import action
import  { toggle } from '../Redux/themeSlice'
/**
 * CSS for the component using styled.components
 */
 const FOOTER = styled.footer`
  background-color: ${({ theme }) => (theme === 'light' ? `${colors.tertiary}` : `${colors.navy}`)};
  border-top: 2px solid #ccc;
  margin-top: 1rem;
  padding: 2rem 0 1.5rem;
  text-align: center;
`;

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => (theme === 'light' ? `${colors.secondary}` : `${colors.lightGreen}`)};
  cursor: pointer;
`;

/**
 * Renders the footer on each page
 * @function Footer
 * @returns {JSX}
 */
 const Footer = () => {

  const theme = useSelector(selectTheme) // retrieve Redux state
  const dispatch = useDispatch()

  return (
    <FOOTER theme={theme}>
      <p>©2022 Wealth Health - All rights reserved </p>
      <NightModeButton theme={theme} onClick={() => dispatch(toggle())}>
          Change mode : {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
    </FOOTER>
  )
}

export default Footer
