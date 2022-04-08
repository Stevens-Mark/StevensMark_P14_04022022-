import colors from '../../styles/colors'
import styled, { keyframes } from 'styled-components'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../Redux/selectors'

/**
 * Keyframe for Loader component
 */
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

/**
 * CSS for the Loader component
 */
 const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const Loader = styled.div`
  animation: ${rotate} 1s infinite linear;
  border: 0.5rem solid  ${({ theme }) => (theme === 'light' ? `${colors.warning}` : `${colors.chromeBlue}`)};
  border-bottom-color: transparent;
  border-radius: 2rem;   
  padding: 1px;
  width: 1rem;
  height: 1rem;
`;

/**
 * Renders a loading spinner icon
 * @function LoadingIcon
 * @returns {JSX}
 */
const LoadingIcon = () => {

  const theme = useSelector(selectTheme) 

    return (
      <Wrapper data-testid="loader">
          <Loader theme={theme} /> 
      </Wrapper>
    )
}

export default LoadingIcon


