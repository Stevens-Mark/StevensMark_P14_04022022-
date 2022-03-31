// import function for onclick event
import { handleClick } from "../../components/Table/EmployeesTable"

// data for 'header' in the table

export const headerList =
  [     
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
        sortType: (a, b) => {                 // func: sort dates (format dd/mm/yyyy) when called in react table   
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
          a = a.values.dateOfBirth.split('/');    // func: sort dates (format dd/mm/yyyy) when called in react table
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
      Header: 'Action',
      accessor: 'actions',
      Cell: props => <div  style={{ textAlign: "center" }}><button onClick={() => handleClick(props)}>Details</button></div>,
    },
  ]