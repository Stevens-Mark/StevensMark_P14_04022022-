/**
 * Renders the 'EmployeesTable on current employees Page' 
 * @function EmployeesTable
 * @returns {JSX}
 */
 const EmployeesTable = () => {

  const employees = JSON.parse(localStorage.getItem('employees'))
  console.log(employees)

  return (
 
        <h1>Table</h1>

  )
}

export default EmployeesTable