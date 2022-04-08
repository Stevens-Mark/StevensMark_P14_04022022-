import React, { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
// import selectors
import { selectTheme } from '../../Redux/selectors'
import styled from 'styled-components'
import colors from '../../styles/colors'

/**
 * CSS for component using styled.components
 */
 const Wrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? `${colors.warning}` : `${colors.chromeBlue}`)};
  span {
    background: ${({ theme }) => (theme === 'light' ? `${colors.tertiary}` : `${colors.lightNavy}`)};
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.2rem 0.5rem;
  }
`;

/**
 * Renders a message for a limited time
 * @function Notify
 * @param {number} props: delay & message
 * @returns {JSX} visible 'message' passed as prop for 'delay' time
 */
export const Notify = ( props ) => {
  const theme = useSelector(selectTheme) 
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, props.delay)
    return () => {
      setVisible({})
    }
  }, [props.delay])

  return visible ? <Wrapper theme={theme}><span>{props.children}</span></Wrapper> : <Wrapper />
}

// Prototypes

Notify.propTypes = {
  props: PropTypes.object
}