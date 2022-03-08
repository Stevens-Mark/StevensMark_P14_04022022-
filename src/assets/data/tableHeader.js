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
        sortType: (a, b) => {
          return new Date(b.values.startDate) - new Date(a.values.startDate)
        },
        Cell: row => <div style={{ textAlign: "left" }}>{row.value}</div>
    },
    {
      Header: 'Department',
      accessor: 'department', 
    },
    {
      Header: 'Date Of Birth',
      accessor: 'dateOfBirth',
        sortType: (a, b) => {
          return new Date(b.values.dateOfBirth) - new Date(a.values.dateOfBirth)
        },
        Cell: row => <div style={{ textAlign: "left" }}>{row.value}</div>
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
  ]