import { useEffect } from 'react'
// import components
import Title from '../components/Title'
import EmployeesTable from '../components/Table/EmployeesTable'

/**
 * Renders the 'CurrentEmployees Page' 
 * @function CurrentEmployees
 * @returns {JSX}
 */
const CurrentEmployees = () => {
  
  useEffect(() => {
    document.title = 'HRNet | Current Employees'
  }, [])

  return (
      <main>     
        <Title heading="Current Employees" />
        <EmployeesTable />
      </main>
  )
}

export default CurrentEmployees

