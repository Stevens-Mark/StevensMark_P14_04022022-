import { createGlobalStyle } from 'styled-components'
import { useSelector } from 'react-redux'
import colors from './colors'

/**
 * CSS Global styles for the site using styled.components
 */
 const StyledGlobalStyle = createGlobalStyle`
 body {  
  -webkit-font-smoothing: antialiased;
  background-color:${colors.tertiary};
  box-sizing: border-box;
  color: ${({ isDarkMode }) => (isDarkMode ? `${colors.lightGreen}` : `${colors.secondary}`)};
  font-family: Arial, 'Segoe UI', 'Roboto', 'Oxygen', sans-serif;
  margin: auto;
  max-width: 1920px;
} 

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

main {
  min-height: 85vh;
  background-color: ${({ isDarkMode }) => (isDarkMode ? `${colors.darkNavy}` : `${colors.primary}`)};
  padding-top: 125px;
}

a {
  text-decoration: none;
  color: ${({ isDarkMode }) => (isDarkMode ? `${colors.lightGreen}` : `${colors.secondary}`)};
  cursor: pointer;  
}

.sr-only {
  -webkit-clip-path: inset(50%) !important;
  border: 0 !important;
  clip-path: inset(50%) !important; /* 2 */
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important; /* 3 */
  width: 1px !important;
}
`;

/**
 * @function GlogalStyle
 * @returns global theme css styling (either for day or night depending on state)
 */
function GlobalStyle() {
  
  const theme = useSelector((state) => state.theme)
  
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
