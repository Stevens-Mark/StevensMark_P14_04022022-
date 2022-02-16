import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
// styling
import styled from 'styled-components'
import colors from '../styles/colors'
// logo import
import logo from '../assets/logos/wealthLogo.webp'

/**
 * CSS for the component using styled.components
 */
const HEADER = styled.header`
  background: ${colors.tertiary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, .8);
  left: 0;
  margin: 0 auto;
  max-width: 1920px;
  position: fixed;
  right: 0;
  top: ${({ position }) => position};
  transition: top 0.6s;
  z-index: 999;
`;

const MainNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: clamp(0.9rem, 1.4vw, 1.2rem);
  justify-content: space-between;
  padding: 0.313rem 0.5rem; 
`;

const LogoWrapper = styled.span`
  align-items: center;
  display: flex;
  img {
    width: clamp(5rem, 7vw, 7rem);
  }
`;

const LINK = styled(NavLink)`
  font-weight: bold;
  margin-right: 1.2rem;

  &.${(props) => props.activeClassName} {
    color: ${colors.primary};
  }
  &:hover {
    color: ${colors.primary};
    text-decoration: underline;
  }
`;

/**
 * Renders the Header
 * @function Header
 * @returns (JSX)
 */
const Header = () => {

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
     <HEADER  position={visible ? '0' : '-140px' }>
      <MainNav>
        <LogoWrapper>
          <LINK to="/"><img src={logo} alt="Wealth Health"/></LINK> 
          <h1>HRNet</h1>
        </LogoWrapper>
          <span>
            <LINK activeClassName="active" exact to='/'>Create</LINK> 
            <LINK activeClassName="active" to="/employees">View</LINK> 
          </span>
      </MainNav>
    </HEADER>
  )
}

export default Header
