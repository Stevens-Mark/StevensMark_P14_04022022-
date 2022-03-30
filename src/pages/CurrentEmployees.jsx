import { useEffect } from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { selectEmployees } from '../Redux/selectors'
import { fetchEmployees } from '../Redux/employeesSlice'
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
  const dispatch = useDispatch()

  if(employees.length<1) dispatch(fetchEmployees())
  // dispatch action to fetch mockData if no data in table (DEMO ONLY: TO BE REMOVED LATER...?)

  useEffect(() => {
    document.title = 'HRNet | Current Employees'
  }, [])

  return (
      <main>     
        <Title heading="Current Employees" />
        <EmployeesTable employees={employees} />
      </main>
  )
}

export default CurrentEmployees

