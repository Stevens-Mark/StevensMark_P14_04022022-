import styled from 'styled-components'

/**
 * CSS for the component using styled.components
 */
 const FOOTER = styled.footer`
  border-top: 2px solid #ccc;
  margin-top: 1rem;
  padding: 2rem 0 1.5rem;
  text-align: center;
`;

/**
 * Renders the footer on each page
 * @function Footer
 * @returns {JSX}
 */
 const Footer = () => {
  return (
    <FOOTER>
      <p>©2022 Wealth Health - All rights reserved </p>
    </FOOTER>
  )
}

export default Footer
