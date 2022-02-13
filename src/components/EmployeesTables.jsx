
import React, { useMemo, useEffect } from 'react'
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table'
// styling
import styled from 'styled-components'
import colors from '../styles/colors'
// import data needed for table
import { headerList } from '../assets/data/tableHeader'
import mockedData from '../assets/data/MOCK_DATA.json'

/**
 * CSS for the component using styled.components
 */
const Container = styled.div`
  display :flex;
  flex-direction: column;
  justify-content: center;
  //  padding: 0 0 20px;
`;

const Table = styled.table`
  border: solid 1px ${colors.secondary};
  background: ${colors.tertiary};
  color: ${colors.primary};
  padding: 10px;
  margin: 10px;
`;

const THeader = styled.th`
  border-bottom: solid 3px ${colors.primary};
  color: ${colors.secondary};
  padding: 0px 8px;
`;

const TData = styled.td`
  padding: 5px;
  border: solid 1px gray;
`;

const Controls = styled.span`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

/**
 * Renders the 'EmployeesTable on current employees Page' 
 * @function EmployeesTable
 * @returns {JSX}
 */
const EmployeesTable = () => {

const employees = JSON.parse(localStorage.getItem('employees')) || []
  console.log(employees)

 const data = useMemo(() => mockedData, [] )
 const columns = useMemo(() => headerList, [] )

 const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    setGlobalFilter,

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter}
  } = useTable(
      { columns,
        data,
        initialState: { pageIndex: 0 },
      }, 
        useGlobalFilter,
        useSortBy,
        usePagination,
      )

  // useEffect(() => {
  //   // props.dispatch({ type: actions.resetPage })
  //   console.log(globalFilter)
  // }, [globalFilter])

 return (
     <Container>
        <Controls>
          <span>
            Show{' '}
            <select
              value={pageSize}
              onChange={e => {setPageSize(Number(e.target.value))}}>
              {[10, 25, 50, 100].map(pageSize => (
                <option key={pageSize} value={pageSize}>{pageSize}</option>))}
            </select>
            {' '}entries
          </span>
          <span>
            <input
            type="text"
            placeholder='search'
            value={globalFilter || ""}
            onChange={e => setGlobalFilter(e.target.value)}/>
          </span>
        </Controls>
        
       <Table {...getTableProps()}>
         <thead>
         {headerGroups.map(headerGroup => (
             <tr {...headerGroup.getHeaderGroupProps()}>
               {headerGroup.headers.map(column => (
                   <THeader
                       {...column.getHeaderProps(column.getSortByToggleProps())}>
                     {column.render('Header')}
                     <span>
                       {column.isSorted
                           ? column.isSortedDesc
                               ? '🔽'
                               : '🔼'
                           : '⏸️'}
                    </span>
                   </THeader>
               ))}
             </tr>
         ))}
         </thead>
         <tbody {...getTableBodyProps()}>
         {page.map((row, i) => {
           prepareRow(row)
           return (
               <tr {...row.getRowProps()}>
                 {row.cells.map(cell => {
                   return (
                       <TData
                           {...cell.getCellProps()}>
                         {cell.render('Cell')}
                       </TData>
                   )
                 })}
               </tr>
           )
         })}
         </tbody>
       </Table>

       <Controls>
       <span>
        Go to page:{' '}
        <input
          type="number"
          Value={pageIndex + 1}
          min={1}
          max={pageOptions.length}
          onChange={e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            gotoPage(page)}}/>
        </span>
        <span>
          Showing Page{' '}<strong>{pageIndex + 1} of {pageOptions.length}</strong>
          {pageOptions.length===1? ' page' : ' pages'}
        </span>
        <span>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>{'<'}</button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>{'>'}</button>{' '}
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
        </span>
      </Controls>
     </Container>
 )
}

export default EmployeesTable
