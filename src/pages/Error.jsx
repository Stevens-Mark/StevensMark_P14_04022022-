import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
// for styling
import styled from 'styled-components'
import colors from '../styles/colors'
import { selectTheme } from '../Redux/selectors'

/**
 * CSS for the component using styled.components
 */
const ErrorWrapper = styled.main`
  align-items: center;
  color: ${({ theme }) => (theme === 'light' ? `${colors.tertiary}` : `${colors.lightGreen}`)};
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1 {
    font-size: clamp(6rem, 18vw, 18rem);
    font-weight: 700;
    margin: 3rem 0rem;
  }

  p {
    font-size: clamp(1.125rem, 2.1vw, 2.5rem);
    font-weight: 500;
  }
`;

const ReturnLink = styled(Link)`
  color: ${({ theme }) => (theme === 'light' ? `${colors.tertiary}` : `${colors.lightGreen}`)};
  font-size: clamp(0.875rem, 1.5vw, 1.375rem);
  font-weight: 500;
  margin-bottom: 5rem;
  text-decoration: underline;
`;

/**
 * Renders Error 404 page
 * @function Error
 * @returns {JSX}
 */
const Error = () => {

  const theme = useSelector(selectTheme) // retrieve Redux state

  return (
    <ErrorWrapper theme={theme}>
      <h1>404</h1>
      <p>Oops, the page you requested does not exist.</p>
      <ReturnLink theme={theme} to="/">Return to the Create Employee page</ReturnLink>
    </ErrorWrapper>
  )
}

export default Error

