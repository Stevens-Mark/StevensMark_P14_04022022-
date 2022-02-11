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
    document.title = 'HRNet | Currrent Employees'
  }, [])

  return (
      <main>     
        <Title heading="Currrent Employees" />
        <EmployeesTable />
      </main>
  )
}

export default CurrentEmployees

