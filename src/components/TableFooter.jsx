import PropTypes from 'prop-types'

/**
 * Sets the number of entries to render on a page
 * @function TableFooter
 * @returns {JSX} 
 */
const TableFooter = ( props ) => {

  const { pageIndex, pageSize, pageCount, rows, noOfEntries } = props

  const minRows = pageIndex+1===1 ? 1 : (pageIndex*pageSize)+1
  const maxRows = pageIndex+1===pageCount? rows.length : ((pageIndex+1)*pageSize)

  return (
    <span>
      {/* {`Showing ${minRows} to ${maxRows} of ${rows.length} entries`} */}
      {`Entries ${minRows} to ${maxRows} of ${rows.length} (filtered from total ${noOfEntries})`}
    </span>
    )
}

export default TableFooter

// Prototypes
TableFooter.propTypes = {
   props: PropTypes.object
}