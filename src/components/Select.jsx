import PropTypes from 'prop-types'
import { capitalize } from '../utils/functions/capitalize'
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
      <select name={id}
        id={id}
        required={true}
        onChange={onChange}
        defaultValue={'DEFAULT'} >
          <option value="DEFAULT" disabled>Select a {id}</option>

          {[...listItems]
            .sort((a, b) => (a.name < b.name ? -1 : 1))
            .map((item, index) => 
              ( <option key={`${item}-${index}`} value={item.value}>{item.name}</option> ))}
      </select>
    </>
  )
}

export default Select

// Prototypes
Select.propTypes = {
  props: PropTypes.object,
}