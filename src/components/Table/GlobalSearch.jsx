import PropTypes from 'prop-types'

/**
 * Sets search word (user input) for searching the table
 * @function GlobalSearch
 * @param {object} props: state, function & number of rows
 * @returns {JSX} input field & sets search keyword
 */
 const GlobalSearch = ( props ) => {

  const { globalFilter, setGlobalFilter, preGlobalFilteredRows } = props
  const count = preGlobalFilteredRows.length

  return (
    <span>
      <label htmlFor="search" className='sr-only'>Search</label>
      <input
        type="text"
        autoFocus
        id="search"
        placeholder={`Search ${count} records...`}
        value={globalFilter || ""}
        onChange={e => setGlobalFilter((e.target.value.replace(/[^0-9a-zA-ZÀ-ÿ-.\s]/g, '').trimStart()))} /> 
    </span>
  )
}

export default GlobalSearch

// Prototypes
GlobalSearch.propTypes = {
  props: PropTypes.object,
}