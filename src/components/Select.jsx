import PropTypes from 'prop-types'
import styled from 'styled-components'
import { capitalize } from '../utils/functions/helpers'

/**
 * CSS for component using styled.components
 */
const Selected =styled.select`
  width: 100%;
  >option {
    font-family: Arial; 
  }
`;

/**
 * Renders the Select dropdown menu
 * @function Select
 * @param {object} props: data to build dropdown menu
 * @returns {JSX}
 */
 const Select = ( props ) => {

  const { id, listItems, onChange, modify } = props

  return (
    <>
      <label htmlFor={id}>{capitalize(id)}</label>
      <Selected
        aria-label={id}
        name={id}
        id={id}
        required={true}
        onChange={onChange} >
        {modify? 
        <option value={modify.value} >{modify.name}</option> :
        <option value="" >Select a {id}</option>
        }
        {[...listItems].sort((a, b) => (a.name < b.name ? -1 : 1)).map((item, index) => {
          return (
            <option key={`${index}-${item.name}`} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </Selected>
    </>
  )
}

export default Select

// Prototypes
Select.propTypes = {
  props: PropTypes.object,
}