import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import { selectTheme, selectEmployees } from '../Redux/selectors'
// for styling
import { lightTheme, darkTheme } from "../styles/themes"
// import components
import Title from '../components/Title'
import EmployeeForm from "../components/EmployeeForm"
import logo from '../assets/logos/wealthLogo.webp'
// import my custom npm package
import { Modal } from "react-custom-modal-by-msparkystevens"

/**
 * Renders the 'EditDeleteEmployee' page
 * @function EditDeleteEmployee
 * @returns {JSX}
 */
const EditDeleteEmployee = () => {

  const mode = useSelector(selectTheme)  // retrieve Redux state
  const { isLoading, isError } = useSelector(selectEmployees)

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const  closeModal = () => { setModalIsOpen(false) }

  useEffect(() => {
    document.title = 'HRNet | Edit'
  }, [])

  return (
    <main>
      <Title heading="Edit Employee" />
      <EmployeeForm setModalIsOpen={setModalIsOpen}/>
      {modalIsOpen && !isLoading && !isError &&
      <Modal 
        closeModal={closeModal} 
        modalTheme={mode ==='dark'? darkTheme : lightTheme} 
        heading="Success !"
        message="New employee record created"
        logo={logo}
        animation={true}
    />
      }
    </main>
  )
}

export default EditDeleteEmployee

