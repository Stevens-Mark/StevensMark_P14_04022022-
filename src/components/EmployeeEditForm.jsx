import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useSelector, useStore} from 'react-redux'
// styling
import styled from 'styled-components'
import colors from '../styles/colors'
// import selectors
import { selectTheme, selectEmployees, selectOnlineStatus } from '../Redux/selectors'
// import data for dropdown menus
import { departments } from '../assets/data/departments'
import { states } from '../assets/data/states'
// import components
import Select from './Select'
import LoadingIcon from './other/loadingIcon'
// import functions, actions & constants
import { capitalize, ConvertDate, ReverseConvertDate } from '../utils/functions/helpers'
import { editAnEmployee } from '../Redux/employeesSlice'
import { 
    SetBirthDateLimit,
    SetDateLimit
 } from '../utils/functions/helpers'

/**
 * CSS for the component using styled.components
 */
const Container = styled.div`
  display :flex;
  justify-content: center;
  padding: 0 0 1.25rem;
`;

const Form = styled.form`
  background: ${({ theme }) => (theme === 'light' ? `${colors.tertiary}` : `${colors.lightNavy}`)};
  border: 1px solid ${({ theme }) => (theme === 'light' ? `${colors.tertiary}` : `${colors.lightGreen}`)};
  display: flex;
  flex-direction: column;
  // font-family: Arial;
  padding: 1.2rem;
  width: 17rem;
  @media (min-width: 445px) {
    width: 25rem;
  }
  
  label {
    font-weight: bold;
  }

  input, select {
    background: ${colors.zircon};
    border-radius: 0.2rem;
    border: 1px solid ${colors.secondary};
    font-family: Arial;
    font-size: 1rem;
    margin: 0.5rem 0rem 1rem;
    padding: 0.375rem;
  }
`;

const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin: 1rem 0rem;
`;

const IsError = styled.p`
  color: ${({ theme }) => (theme === 'light' ? `${colors.warning}` : `${colors.chromeBlue}`)};
  font-weight: bold;
  margin-top: -10px;
`;

const Alert = styled(IsError)`
  text-align: center;
`;

const Btn = styled.button`
  background-color: ${({ theme }) => (theme === 'light' ? `${colors.primary}` : `${colors.chromeBlue}`)};
  border-radius: 0.2rem;
  border: none;
  color: ${colors.secondary};
  cursor: pointer;
  display: block;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  padding: 0.5rem;
  transition: 0.4s;
  width: 100%;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .8);
    opacity: 0.8;
    transition: 0.4s;
    color: ${colors.tertiary};
  }
`;

const Cancel = styled(Btn)`
  background-color: ${colors.warning};
  color: ${colors.tertiary};
  &:hover {
    color: ${colors.secondary};
  }
`;

/**
 * Renders the 'EmployeeEditForm' form
 * @function EmployeeEditForm
 * @param {function} props: set state for isModalOpen
 * @returns {JSX}
 */
const EmployeeEditForm = ( props ) => {

  const { setModalIsOpen } = props
  const store = useStore()
  const history = useHistory()

  // Get ID from URL param
  const { id } = useParams()

  // retrieve Redux state
  const theme = useSelector(selectTheme)
  const online = useSelector(selectOnlineStatus).isOnline
  const { employees, isLoading, isModifyError } = useSelector(selectEmployees)
  const modify = employees.filter(item => item._id === id)
  const initialState = modify[0]
 
  const errorState = {
    firstName: false,
    lastName: false,
    street: false,
    city: false,
    zipCode: false
  }

  const [error, setError] = useState(errorState)
  const [input, setInput] = useState(initialState)
  
  /**
 * Restricts what the user can enter in the TEXT input fields & saves to state
 * @function handleText
 * @param {object} the targeted input 
 */
    const handleText = (e) => {
    if (e.target.id !=='street') {    // permits letters only
      setInput({
        ...input,
        [e.target.id]: capitalize(e.target.value.replace(/[^a-zA-ZÀ-ÿ-.\s]/g, '')).trimStart(),
      })
    }
      else {
        setInput({                    // permits alphanumeric
          ...input,
          [e.target.id]: capitalize(e.target.value.replace(/[^0-9a-zA-ZÀ-ÿ-.\s]/g, '')).trimStart(),
        })
      }
  }

  /**
  *Takes selected DOB from date picker &
  * sends for formatting dd/mm/yyyy & then puts in state
  * @function handleDOB
  */
  const handleDOB = ( selectedDate ) => {
    setInput({...input, dateOfBirth: ConvertDate(selectedDate)})
  }

  /**
  *Takes selected DOB from date picker &
  * sends for formatting dd/mm/yyyy & then puts in state
  * @function handleStartDate
  */
  const handleStartDate = ( selectedDate ) => {
    setInput({...input, startDate: ConvertDate(selectedDate) })
  }

  /**
   * Simple validation check
   * But there is some user input control using attributes maxLength, required
   * and the handleText, SetBirthDateLimit & SetBirthDateLimit functions
   * @function ValidateForm
   * @returns {boolean}
   */
  const validateForm = () => {

    let firstName, lastName, street, city, zipCode

    if (input.firstName.trim().length<2) {
      firstName = true
    }
    if (input.lastName.trim().length<2) {
      lastName = true
      }
 
    if (input.street.trim().length<2) {
      street = true
      }
    if (input.city.trim().length<2) {
      city = true
      }
     if (input.zipCode.toString().length!==5) {
      zipCode = true
      } 
      
    if ( firstName || lastName || street || city || zipCode ) 
      {
        setError({ 
          firstName, 
          lastName,
          street,
          city,
          zipCode
        })
      return false
    }
    return true
  }

  /**
  * @function handleSubmit
  */
  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (validateForm())
      {
        editAnEmployee(store, input)  // dispatch edited input data to store
        setModalIsOpen(true)          // launch success modal
        setError(errorState)
        // event.target.reset()          // reset form inputs
      }
      else {
        return
        } 
  }

  /**
   * Redirects back to current employees list when users cancels
   * @function handleCancel
   * @returns back to current employees list
   */
  const handleCancel = () => {
    history.push(`/employees/`)
    // window.history.back()
  }

  return (
    <Container>
      <Form data-testid="form" theme={theme} onSubmit={handleSubmit}>  
        <label htmlFor="firstName">First Name</label>
          <input type="text"
            id="firstName"
            autoFocus
            value={input.firstName}
            required={true}
            maxLength={30}
            onChange={(e) => handleText(e)}/>
            {error.firstName && <IsError theme={theme}>⚠️ First Name: 2 letters min.</IsError>}    

        <label htmlFor="lastName">Last Name</label>
          <input type="text"
            id="lastName" 
            value={input.lastName}
            required={true}
            maxLength={30}
            onChange={(e) => handleText(e)}/>   
            {error.lastName && <IsError theme={theme}>⚠️ Last Name: 2 letters min.</IsError>}       

        <label htmlFor="dateOfBirth">Date Of Birth</label>
          <input type="date"
            id="dateOfBirth" 
            value={ReverseConvertDate(input.dateOfBirth)}
            required={true}
            max={SetBirthDateLimit(18)}   // age limit between 18-70 years
            min={SetBirthDateLimit(70)}
            onChange={(e) => handleDOB(e.target.value)}/>   
 
        <label htmlFor="startDate">Start Date</label>
          <input type="date"
            id="startDate" 
            value={ReverseConvertDate(input.startDate)}
            required={true}
            min={SetDateLimit(-30)}   // 30 days BEFORE so minus number
            max={SetDateLimit(120)}   // 120 days AFTER so positive number
            onChange={(e) => handleStartDate(e.target.value)}/> 

        <FieldSet>
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input type="text"
            id="street"
            value={input.street}
            required={true}
            maxLength={60}
            onChange={(e) => handleText(e)}/> 
            {error.street && <IsError theme={theme}>⚠️ Please check address</IsError>} 

          <label htmlFor="city">City</label>
          <input type="text"
            id="city"
            value={input.city}
            required={true}
            maxLength={30}
            onChange={(e) => handleText(e)}/> 
            {error.city && <IsError theme={theme}>⚠️ Please check city name</IsError>}

          <Select 
            id={"state"}
            modify={states.find(o => o.value === input.state)}
            listItems={states}
            onChange={(e) => setInput({...input, state: e.target.value})} />
        
          <label htmlFor="zipCode">Zip Code</label>
          <input type="number"
            id="zipCode"
            placeholder='5 digits'
            value={input.zipCode}
            min={0}
            required={true}
            onChange={(e) => setInput({...input, zipCode: e.target.value})}/>
            {error.zipCode && <IsError theme={theme}>⚠️ Should be 5 digits</IsError>} 
        </FieldSet>
        
          <Select
            id={"department"}
            modify={departments.find(o => o.value === input.department)}
            listItems={departments}
            onChange={(e) => setInput({...input, department: e.target.value})} /> 

            {isLoading && <LoadingIcon />}
            <Alert theme={theme}>{isModifyError}</Alert>
            {/* Display error message & disable Modify & Cancel button if NOT online */}
            <Alert theme={theme}>{online ? "" : "Offline : Please check your connection !"}
              <Btn data-testid="submitButton" aria-label="Modify" theme={theme} type="submit" disabled={isLoading || !online? true : false}>Modify</Btn>
              <Cancel aria-label="Cancel" type="button" onClick={()=> handleCancel()} disabled={isLoading || !online? true : false}>Cancel</Cancel>
            </Alert> 
      </Form>  
      
    </Container>
  )
}

export default EmployeeEditForm

// Prototypes
EmployeeEditForm.propTypes = {
  props: PropTypes.func,
}