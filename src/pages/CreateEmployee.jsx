import { useEffect } from "react"
// import components
import Title from '../components/Title'
import EmployeeForm from "../components/EmployeeForm"

/**
 * Renders the 'CreateEmployee' page
 * @function SignIn
 * @returns {JSX}
 */
const CreateEmployee = () => {

  useEffect(() => {
    document.title = 'HRNet | Create'
  }, [])

  return (
    <main>
      <Title heading="Create Employee" />
      <EmployeeForm />
    </main>
  )
}

export default CreateEmployee

