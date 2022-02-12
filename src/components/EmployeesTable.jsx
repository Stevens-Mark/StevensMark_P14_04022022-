
import React, { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
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

/**
 * Renders the 'EmployeesTable on current employees Page' 
 * @function EmployeesTable
 * @returns {JSX}
 */

const EmployeesTable = () => {

  const employees = JSON.parse(localStorage.getItem('employees')) || []
    console.log(employees)


 const data = useMemo(
     () => mockedData,
     []
 )

 const columns = useMemo(
      () => headerList,
        []
      )

 const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   rows,
   prepareRow,
 } = useTable({ columns, data }, useSortBy)

 return (
     <Container>
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
         {rows.map(row => {
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
     </Container>
 )
}

export default EmployeesTable
