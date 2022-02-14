import PropTypes from 'prop-types'

/**
 * Sets search word (user input) for searching the table
 * @function GlobalSearch
 * @param {object} props: 
 * @returns {JSX} input field & sets search keyword
 */
 const GlobalSearch = ( props ) => {
  const count = props.preGlobalFilteredRows.length
  return (
    <span>
      <input
        type="text"
        placeholder={`Search ${count} records...`}
        value={props.globalFilter || ""}
        onChange={e => props.setGlobalFilter(e.target.value)}/>
  </span>
  )
}

export default GlobalSearch

// Prototypes
GlobalSearch.propTypes = {
  props: PropTypes.object,
}