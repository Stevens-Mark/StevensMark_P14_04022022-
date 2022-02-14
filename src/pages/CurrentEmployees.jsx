import { useEffect } from 'react'
import EmployeesTable from '../components/EmployeesTable'
// import components
import Title from '../components/Title'

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

