import React from "react"
import PropTypes from 'prop-types'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
// for styling
import styled from 'styled-components'
import colors from '../styles/colors'
import { useSelector } from 'react-redux'
import { selectTheme } from '../Redux/selectors'

/**
 * CSS for the component using styled.components
 */
const Div = styled.div`

  // width: min-content;

  .react-datepicker-wrapper input {
    // width: 100%;
    // font-family: 'Arial';
    width: 259px;
    @media (min-width: 445px) {
      width: 386px;
    }
  }

  .react-datepicker__header {
    background-color: ${({ theme }) => (theme === 'light' ? `${colors.primary}` : `${colors.chromeBlue}`)};
    // font-family: 'Arial';
  }

  .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
    color: ${colors.tertiary};
    font-weight: bold;
    font-size: 0.944rem;
  }

  .react-datepicker__day-name
  // .react-datepicker__day  
  {
    color: ${colors.tertiary};
    // font-family: 'Arial';
  }

  .react-datepicker__close-icon::after {
    background: ${({ theme }) => (theme === 'light' ? `${colors.primary}` : `${colors.chromeBlue}`)};
  }

  .react-datepicker__close-icon {
    top: -4px;
  } 

  .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected {
    background-color: #4c8bf5;

  }
  .react-datepicker__day, .react-datepicker__month-text, .react-datepicker__quarter-text, .react-datepicker__year-text {
    :hover {
      background:  ${({ theme }) => (theme === 'light' ? `${colors.primary}` : `${colors.chromeBlue}`)};
      color: ${colors.tertiary};
    }
  }

  .react-datepicker__today-button {
    background: ${({ theme }) => (theme === 'light' ? `${colors.primary}` : `${colors.chromeBlue}`)};
    border-top: 1px solid #aeaeae;
    color: ${colors.tertiary};
    // font-family: 'Arial';
  }

`;

const PickDate = ( props ) => {

const { id, selected, onChange, maxDate, minDate } = props
const theme = useSelector(selectTheme) // retrieve Redux state

 return (
    
  <Div theme={theme}>
    <label htmlFor={id}>{id}</label>
    
    <DatePicker 
      id={id}
      required
      selected={selected} 
      onChange={onChange} 
      dateFormat="MM/dd/yyyy"
      placeholderText="mm/dd/yyyy"
      maxDate={maxDate}
      minDate={minDate}

      peekNextMonth
      useShortMonthInDropdown
      showMonthDropdown

      showYearDropdown
      dropdownMode="select"

      todayButton="Home"

      showPopperArrow={false}
      closeOnScroll={true}

      isClearable={true}
      />

  </Div>
    
 )

}

export default PickDate

// Prototypes
PickDate.propTypes = {
  props: PropTypes.object,
}
