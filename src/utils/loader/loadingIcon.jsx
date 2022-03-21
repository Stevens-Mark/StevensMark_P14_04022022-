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
  margin: 1.25rem;
  align-items: center;
`;

const Loader = styled.div`
  animation: ${rotate} 1s infinite linear;
  border: 0.5rem solid  ${({ theme }) => (theme === 'light' ? `${colors.primary}` : `${colors.chromeBlue}`)};
  border-bottom-color: transparent;
  border-radius: 2rem;   
  padding: 1px;
  width: 1.25rem;
  height: 1.25rem;
`;

/**
 * Renders a loading spinner icon
 * @function LoadingIcon
 * @returns {JSX}
 */
const LoadingIcon = () => {

  const theme = useSelector(selectTheme) 

    return (
      <Wrapper>
          <Loader theme={theme} /> 
      </Wrapper>
    )
}

export default LoadingIcon


