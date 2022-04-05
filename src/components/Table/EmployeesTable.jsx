
import React, { useMemo, useState, useEffect } from 'react'
import { useSelector, useStore } from 'react-redux'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
// import selector
import { selectTheme, selectEmployees } from '../../Redux/selectors'
// import action
import { deleteAnEmployee } from '../../Redux/employeesSlice'
// imports for table
import { Notify } from '../../utils/functions/Notify'
import LoadingIcon from '../../utils/loader/loadingIcon'
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table'
import GlobalSearch from './GlobalSearch'
import Pagination from './Pagination'
import SearchResult from './SearchResult'
// styling
import styled from 'styled-components'
import colors from '../../styles/colors'

/**
 * CSS for the component using styled.components
 */
const Container = styled.div`
  display :flex;
  flex-direction: column;
  justify-content: center;

  input, select {
    border-radius: 0.2rem;
    border: 1px solid ${colors.secondary};
    font-size: 1rem;
    padding: 0.25rem;
  }
`;

const Table = styled.table`
  background: ${({ theme }) => (theme === 'light' ? `${colors.tertiary}` : `${colors.lightNavy}`)};
  border-collapse: collapse;
  border: solid 1px ${({ theme }) => (theme === 'light' ? `${colors.secondary}` : `${colors.gray}`)};
  color: ${({ theme }) => (theme === 'light' ? `${colors.darkBrown}` : `${colors.lightGreen}`)};
  margin: 0.625rem;
  padding: 0.625rem;

  @media (max-width: 1199px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  th {
    background: ${({ theme }) => (theme === 'light' ? `${colors.tertiary}` : `${colors.lightNavy}`)};
    border-bottom: solid 3px ${({ theme }) => (theme === 'light' ? `${colors.darkBrown}` : `${colors.slate}`)};
    color: ${({ theme }) => (theme === 'light' ? `${colors.secondary}` : `${colors.lightGreen}`)};
    padding: 0.313rem;

    button {
      border: none;
      margin: 5px 0px 5px 5px;
    }
   }
 
  tr:nth-child(2n+1) {
    background: ${({ theme }) => (theme === 'light' ? `${colors.zircon}` : `${colors.lightestNavy}`)};
  }

  tr:hover, tr:focus{
    color: ${colors.tertiary};
    background: ${({ theme }) => (theme === 'light' ? `${colors.darkBrown}` : `${colors.slate}`)};
  }

  td {
    border: solid 0.5px ${colors.gray};
    padding: 0.313rem;
  }
`;

const DeleteBtn = styled.button`
  background: ${colors.warning};
  border-radius: 10px;
  border: 1px solid ${colors.tertiary};
  color: ${colors.tertiary};
  cursor: pointer;
  font-size: 1rem;
  margin: 1px 10px;
  padding: 0.2rem 0.5rem;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .8);
    opacity: 0.85;
    transition: 0.4s;
    background: ${colors.zircon};
    color: ${colors.secondary};
  }
`;

const ModifyBtn = styled(DeleteBtn)`
  background: ${colors.primary};
`;

const Controls = styled.span`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0.625rem;

  span {
    margin: 0.3rem 0rem;
    > input[type=number] {
      width: 2.5rem;
    }
  }

  div span:nth-child(2) {
    white-space: nowrap;
  }
  
  button {
    margin: 0.3rem 0rem;
  }
`;

const MsgContainer = styled.div`
  height: 1.4rem;
  text-align: center;
  margin-bottom: 0.3rem;
`;

/**
 * Renders the 'EmployeesTable on current employees Page' 
 * @function EmployeesTable
 * @param {array} employees: data
 * @returns {JSX}
 */
const EmployeesTable = ( { employees } ) => {

  // retrieve Redux state
  const theme = useSelector(selectTheme) 
  const { isDeleting, isDeleteError } = useSelector(selectEmployees)
  // local state
  const [submitted, setSubmitted] = useState(false)

  const data = useMemo(() => employees, [ employees ] )
  const store = useStore()
  const history = useHistory()
 
  useEffect(() => {
    setTimeout(() => {
      setSubmitted(false)
    }, 8000)
    return () => {
      setSubmitted({})
    }
  }, [employees])

  /**
 * Deletes the selected employee record 
 * @function handleClick
 * @param {object} cell: data of selected row
 * @returns {dispatch} to remove the record
 */
  const handleClick = (e, cell) => {
    e.stopPropagation()
    setSubmitted(true)
    deleteAnEmployee(store, cell?.row?.original)
   }

  /**
 * Redirects to edit employee form when record chosen from table (modify button)
 * @function handleRowClick
 * @param {object} cell: chosen record data 
 * @returns {JSX} edit employee form
 */
   const handleRowClick = (cell) => {
    history.push(`/employees/edit/${cell?.row?.original._id}`)
   } 

  const columns = useMemo(
    () =>   [     
    {
    Header: 'First Name',
    accessor: 'firstName', // accessor is the "key" in the data
    },
    {
    Header: 'Last Name',
    accessor: 'lastName',
    },
    {
      Header: 'Start Date',
      accessor: 'startDate',
      // func: sort dates (format dd/mm/yyyy) when called in react table   
        sortType: (a, b) => { 
          a = a.values.startDate.split('/');
          b = b.values.startDate.split('/');
          return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
        },
        Cell: row => <div>{row.value}</div>
    },
    {
      Header: 'Department',
      accessor: 'department', 
    },
    {
      Header: 'Date Of Birth',
      accessor: 'dateOfBirth',
        sortType: (a, b) => {
          a = a.values.dateOfBirth.split('/'); 
          b = b.values.dateOfBirth.split('/');
          return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
        },
        Cell: row => <div>{row.value}</div>
    },
    {
      Header: 'Street',
      accessor: 'street', 
    },
    {
      Header: 'City',
      accessor: 'city', 
    },
    {
      Header: 'State',
      accessor: 'state', 
    },
    {
      Header: 'Zip Code',
      accessor: 'zipCode', 
    },
    {
      Header: 'Delete',
      accessor: 'actions',
      disableSortBy: true,
      Cell: props => <div style={{ textAlign: "center" }}>
          <DeleteBtn onClick={(e) => handleClick(e, props)}>Delete</DeleteBtn>
          <ModifyBtn onClick={()=> handleRowClick(props)}>Modify</ModifyBtn>
            </div>,    
    },
  ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    setGlobalFilter,
    preGlobalFilteredRows,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter }
  } = useTable(
      { columns,
        data,
      }, 
        useGlobalFilter,
        useSortBy,
        usePagination,
      )

  return (
    <Container>
      <Controls>{/* Pagination & search controls */}
        <Pagination pageSize={pageSize} setPageSize={setPageSize}/>
        <GlobalSearch globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} preGlobalFilteredRows={preGlobalFilteredRows}/>
      </Controls>
        <MsgContainer>
        {isDeleting? <LoadingIcon /> :
          <>
            {submitted && isDeleteError && <Notify delay="8000">{isDeleteError}</Notify> }
            {submitted && !isDeleteError && <Notify delay="8000">Record Deleted !</Notify> }
          </>
        } 
        </MsgContainer>
      <Table theme={theme} {...getTableProps()}>{/* Build table heading with sort funtionality */}
        <thead>
        {headerGroups.map(headerGroup => (
          <tr  {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                        ? <button aria-label="Sort Down">{'🔽'}</button>
                        : <button aria-label="Sort Up">{'🔼'}</button>
                    : <button aria-label="Original Order">{'🔃'}</button>}
                </span>
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>{/* map data into rows in the table */}
        {page.map((row, i) => {
          prepareRow(row)
          return (
            <tr tabIndex="0" 
                  // onClick={(e)=> handleRowClick(row)} 
                  // onKeyPress={(e)=> handleRowKeypress(e, row)} 
                {...row.getRowProps() }>
                  {row.cells.map(cell => {
                    return (
                        <td
                            {...cell.getCellProps()}>
                          {cell.render('Cell')}
                        </td>
                    )
                  })}
            </tr>
          )
        })}
        </tbody>
      </Table>{/* Display message "no records", number of pages or search results at footer of table */}
      <Controls>
        {rows.length<1 && !globalFilter?
          <span>
            <strong>There are No records available...</strong>
          </span> :
        <>
          {!globalFilter?
            <span data-testid="showPage">
              Showing Page <strong>{pageIndex + 1} of {pageCount}</strong>
              {pageCount===1? ' page ' : ' pages '}
            </span>
            :
            <SearchResult pageIndex={pageIndex} pageSize={pageSize} pageCount={pageCount} rows={rows} noOfEntries={data.length}/>
          }
          <div>{/* Go to page input option */}
            <span>
              <label htmlFor='goToPage'>Go to page:{' '}</label>
              <input
                id='goToPage'
                type="number"
                value={pageIndex + 1}
                min={1}
                max={pageCount}
                onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(page)} }/> {globalFilter && pageCount>1? `of ${pageCount} ` : ''}
            </span>
            <span>{/* Page Navigation buttons  */}
              <button data-testid="first" aria-label="First Page" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'⏪'}</button>{' '}
              <button data-testid="previous" aria-label="Previous Page" onClick={() => previousPage()} disabled={!canPreviousPage}>{'◀️'}</button>{' '}
              <button data-testid="next" aria-label="Next Page" onClick={() => nextPage()} disabled={!canNextPage}>{'▶️'}</button>{' '}
              <button data-testid="last" aria-label="Last Page" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'⏩'}</button>
            </span>
          </div>
        </> }
      </Controls>
    </Container>
  )
}

export default EmployeesTable

// Prototypes

EmployeesTable.propTypes = {
  employees: PropTypes.array.isRequired
}