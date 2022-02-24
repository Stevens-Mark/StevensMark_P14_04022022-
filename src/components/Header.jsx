import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
// styling
import styled from 'styled-components'
import colors from '../styles/colors'
import { selectTheme } from '../Redux/selectors'
// logo import
import logo from '../assets/logos/wealthLogo.webp'

/**
 * CSS for the component using styled.components
 */
const HEADER = styled.header`
  background-color: ${({ theme }) => (theme === 'light' ? `${colors.tertiary}` : `${colors.navy}`)};
  box-shadow: ${({ theme }) => (theme === 'light' ? '0 2px 4px rgba(0, 0, 0, .8)' : '0 2px 4px rgba(255, 255, 255, .8)')}; 
  left: 0;
  margin: 0 auto;
  max-width: 1920px;
  min-height: 5.5rem;
  position: fixed;
  right: 0;
  top: ${({ position }) => position};
  transition: top 0.6s;
  z-index: 999;

  }
`;

const MainNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: clamp(0.9rem, 1.4vw, 1.2rem);
  justify-content: space-between;
  padding: 0.313rem 0.5rem; 
  span:nth-child(n+2) a {
    margin-right: 1.2rem;
  }
`;

const LogoWrapper = styled.span`
  align-items: center;
  display: flex;
  img {
    width: clamp(4rem, 7vw, 7rem);
  }
  div {
    margin-right: 1rem;
  }
  h1 {
    font-size: clamp(1rem, 1.4vw, 1.2rem);
    margin: unset;
`;

const LINK = styled(NavLink)`
  font-weight: bold;

  &.${(props) => props.activeClassName} {
    color: ${({ theme }) => (theme === 'light' ? `${colors.darkBrown}` : `${colors.chromeBlue}`)};
  }
  &:hover {
    color: ${({ theme }) => (theme === 'light' ? `${colors.darkBrown}` : `${colors.chromeBlue}`)};
    text-decoration: underline;
  }
`;

/**
 * Renders the Header
 * @function Header
 * @returns (JSX)
 */
const Header = () => {

  const theme = useSelector(selectTheme) // retrieve Redux state
  // local states
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

   useEffect(() => {
    const handleScroll = () => {
    const currentScrollPos = window.pageYOffset        // find current scroll position
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 10) || currentScrollPos < 10)   // set state based on location info
    setPrevScrollPos(currentScrollPos)      // set state to new scroll position
    }
    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

   return (
     <HEADER theme={theme} position={visible ? '0' : '-140px' }>
      <MainNav>
        <LogoWrapper>
          <LINK to="/"><img src={logo} alt="Go to Home Page"/></LINK> 
          <div>
            <h1>Wealth Health</h1>
            <span>HRNet</span>
          </div>
        </LogoWrapper>
          <span>
            <LINK theme={theme} activeClassName="active" exact to='/'>Create</LINK> 
            <LINK theme={theme} activeClassName="active" to="/employees">View</LINK> 
          </span>
      </MainNav>
    </HEADER>
  )
}

export default Header
