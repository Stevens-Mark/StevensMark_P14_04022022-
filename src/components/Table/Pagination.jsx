import PropTypes from 'prop-types'

/**
 * Sets the number of entries to render on a page
 * @function Pagination
 * @param {number} pageSize
 * @param {function} setPageSize (to set State)
 * @returns {JSX} dropdown & pageSize (state)
 */
 const Pagination = ( { pageSize, setPageSize } ) => {
  return (
    <span>
      <label htmlFor='pageSize' className='sr-only'>Page SiZe</label>
      <select name='pageSize'
        id='pageSize'
        value={pageSize}
        onChange={e => {setPageSize(Number(e.target.value))}}>
        {[10, 25, 50, 100].map(pageSize => (
          <option key={pageSize} value={pageSize}>Show {pageSize}</option>))}
      </select>
  </span>
  )
}

export default Pagination

// Prototypes
Pagination.propTypes = {
   pageSize: PropTypes.number.isRequired,
   setPageSize: PropTypes.func.isRequired,
}