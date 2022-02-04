import { useEffect } from 'react'
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
      </main>
  )
}

export default CurrentEmployees

