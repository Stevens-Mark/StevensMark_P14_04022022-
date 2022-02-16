
import React, { useMemo } from 'react'
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table'
// styling
import styled from 'styled-components'
import colors from '../../styles/colors'
// Import components
import GlobalSearch from './GlobalSearch'
import Pagination from './Pagination'
import SearchResult from './SearchResult'
// import data needed for table
import { headerList } from '../../assets/data/tableHeader'
import mockedData from '../../assets/data/MOCK_DATA.json'

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
  border: solid 1px ${colors.secondary};
  background: ${colors.tertiary};
  color: ${colors.primary};
  padding: 0.625rem;
  margin: 0.625rem;
  border-collapse: collapse;

  @media (max-width: 1201px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  th {
    border-bottom: solid 3px ${colors.primary};
    color: ${colors.secondary};
    padding: 0px 0px 5px;
  }

  td {
    padding: 5px;
    border: solid 1px gray;
  }
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
      width: 40px;
    }
    > span {
      padding-left: 10px;
      white-space: nowrap;
    }
  }
`;

/**
 * Renders the 'EmployeesTable on current employees Page' 
 * @function EmployeesTable
 * @returns {JSX}
 */
const EmployeesTable = () => {

  const employees = JSON.parse(localStorage.getItem('employees')) || []

   if (employees.length<1)                                          // ONLY FOR DEMO otherwise REMOVE THIS CODE
    mockedData.forEach(employee => employees.push(employee))       // if no employees data held in localStorage already...
    localStorage.setItem('employees', JSON.stringify(employees))  // Add mock employee records. 
  
  const columns = useMemo(() => headerList, [] )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(() => employees, [] )

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
    // pageOptions,
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
      <Controls>
        <Pagination pageSize={pageSize} setPageSize={setPageSize}/>
        <GlobalSearch globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} preGlobalFilteredRows={preGlobalFilteredRows}/>
      </Controls>
      
      <Table {...getTableProps()}>
        <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                    : ' ⏸️'}
                </span>
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {page.map((row, i) => { 
          prepareRow(row)
          return (
              <tr {...row.getRowProps() }>
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
      </Table>

      <Controls>
        {rows.length<1 && !globalFilter?
          <span>
            <strong>There are No records available...</strong>
          </span> :
        <>       
          {!globalFilter?
            <span>
              Showing Page{' '}<strong>{pageIndex + 1} of {pageCount}</strong>
              {pageCount===1? ' page' : ' pages'}
            </span>
            :    
            <SearchResult pageIndex={pageIndex} pageSize={pageSize} pageCount={pageCount} rows={rows} noOfEntries={data.length}/>
          }

          <span>
            Go to page:{' '}
            <input
              type="number"
              value={pageIndex + 1}
              min={1}
              max={pageCount}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)}}/> {globalFilter && pageCount>0? `of ${pageCount} ` : ''}
                
            <span>
              <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>{' '}
              <button onClick={() => previousPage()} disabled={!canPreviousPage}>{'<'}</button>{' '}
              <button onClick={() => nextPage()} disabled={!canNextPage}>{'>'}</button>{' '}
              <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>   
            </span>   
          </span>
        </> }
      </Controls>
    </Container>
  )
}

export default EmployeesTable
