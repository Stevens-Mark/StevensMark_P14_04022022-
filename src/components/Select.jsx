import PropTypes from 'prop-types'
import styled from 'styled-components'
import { capitalize } from '../utils/functions/helpers'

/**
 * CSS for component using styled.components
 */
const Selected =styled.select`
  width: 100%;
`;

/**
 * Renders the Select dropdown menu
 * @function Select
 * @param {object} props: data to build dropdown menu
 * @returns {JSX}
 */
 const Select = ( props ) => {

  const { id, listItems, onChange } = props

  return (
    <>
      <label htmlFor={id}>{capitalize(id)}</label>
      <Selected name={id}
        id={id}
        required={true}
        onChange={onChange}
        key={'DEFAULT'}
        defaultValue={'DEFAULT'} 
        >
          <option value="DEFAULT" disabled hidden>Select a {id}</option>

          {[...listItems]
            .sort((a, b) => (a.name < b.name ? -1 : 1))
            .map((item, index) => 
              ( <option key={`${item}-${index}`} value={item.value}>{item.name}</option> ))}
      </Selected>
    </>
  )
}

export default Select

// Prototypes
Select.propTypes = {
  props: PropTypes.object,
}