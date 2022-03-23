import { useEffect } from 'react'
import {  useSelector } from 'react-redux'
import { selectEmployees } from '../Redux/selectors'
// import components
import Title from '../components/Title'
import EmployeesTable from '../components/Table/EmployeesTable'

/**
 * Renders the 'CurrentEmployees Page' 
 * @function CurrentEmployees
 * @returns {JSX}
 */
const CurrentEmployees = () => {
  
  let employees = useSelector(selectEmployees).employees    // retrieve Redux state

  useEffect(() => {
    document.title = 'HRNet | Current Employees'
  }, [])

  return (
      <main>     
        <Title heading="Current Employees" />
        <EmployeesTable employees={employees}/>
      </main>
  )
}

export default CurrentEmployees

