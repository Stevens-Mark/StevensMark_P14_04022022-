import styled from 'styled-components'
import PropTypes from 'prop-types'
/**
 * CSS for the component using styled.components
 */
 const Wrapper = styled.div`
  padding-top: 1rem;
  text-align: center;

  i {
    font-size: 2.5rem;
  }
  h2 {
    margin: 0.5rem 0rem;
    font-size: clamp(1.2rem, 1.6vw, 1.5rem);
  }
`;

/**
 * Renders a Title on a page
 * @function Title
 * @param {string} heading: to display
 * @returns {JSX}
 */
 const Title = ( { heading } ) => {
  return (
    <Wrapper>
      <i className="fa fa-user-circle"></i>
      <h2>{heading}</h2>
    </Wrapper> 
  )
}

export default Title

// Prototypes
Title.propTypes = {
  heading: PropTypes.string.isRequired,
}