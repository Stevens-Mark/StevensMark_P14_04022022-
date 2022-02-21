import PropTypes from 'prop-types'

/**
 * Sets search word (user input) for searching the table
 * @function GlobalSearch
 * @param {object} props: state, func & noumber of rows
 * @returns {JSX} input field & sets search keyword
 */
 const GlobalSearch = ( props ) => {

  const { globalFilter, setGlobalFilter, preGlobalFilteredRows } = props
  const count = preGlobalFilteredRows.length

  return (
    <span>
      <input
        type="text"
        placeholder={`Search ${count} records...`}
        value={globalFilter || ""}
        onChange={e => setGlobalFilter(e.target.value)} />
    </span>
  )
}

export default GlobalSearch

// Prototypes
GlobalSearch.propTypes = {
  props: PropTypes.object,
}