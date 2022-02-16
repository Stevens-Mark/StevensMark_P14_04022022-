import PropTypes from 'prop-types'

/**
 * Renders a summary of the results from a users search
 * @function SearchResult
 * @param {object} props: data needed to render the results
 * @returns {JSX} 
 */
const SearchResult = ( props ) => {

  const { pageIndex, pageSize, pageCount, rows, noOfEntries } = props

  const minRows = pageIndex+1===1 ? 1 : (pageIndex*pageSize)+1
  const maxRows = pageIndex+1===pageCount? rows.length : ((pageIndex+1)*pageSize)

  return (
    <>
      {rows.length>0?
        <span>
          Entries <strong>{minRows} to {maxRows}</strong> of <strong>{rows.length} {rows.length===1? 'record' : 'records'} found</strong> (filtered from a total of {noOfEntries} {noOfEntries===1? 'record' : 'records'}) 
        </span> :
        <span>
          <strong>No records found</strong> (filtered from a total of {noOfEntries} {noOfEntries===1? 'record' : 'records'}) 
        </span>
      }
    </>
    )
}

export default SearchResult

// Prototypes
SearchResult.propTypes = {
   props: PropTypes.object
}