import { useEffect, useState } from "react"
// import components
import Title from '../components/Title'
import EmployeeForm from "../components/EmployeeForm"
import Modal from "../components/modal"

/**
 * Renders the 'CreateEmployee' page
 * @function CreateEmployee
 * @returns {JSX}
 */
const CreateEmployee = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  // const closeModal = () => setModalIsOpen(false)

  useEffect(() => {
    document.title = 'HRNet | Create'
  }, [])

  return (
    <main>
      <Title heading="Create Employee" />
      <EmployeeForm setModalIsOpen={setModalIsOpen}/>
      {modalIsOpen && 
      <Modal setModalIsOpen={setModalIsOpen} />
      }
    </main>
  )
}

export default CreateEmployee

