import { useState } from 'react'
// styling
import styled from 'styled-components'
import colors from '../styles/colors'
// import data for dropdown menus
import { departments } from '../assets/data/departments'
import { states } from '../assets/data/states'
// import components
import Select from './Select'
// import functions & constants
import { capitalize } from '../utils/functions/capitalize'
import { 
    usZipCodes,
    SetBirthDateLimit,
    SetDateLimit
 } from '../utils/functions/validation'

/**
 * CSS for the component using styled.components
 */
const Container = styled.div`
  display :flex;
  justify-content: center;
  padding: 0 0 1.25rem;
`;

const Form = styled.form`
  background: ${colors.tertiary};
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat';
  padding: 1.2rem;
  width: 17rem;
  @media (min-width: 445px) {
    width: 25rem;
  }
  
  label {
    font-weight: bold;
  }

  input, select {
    border-radius: 0.2rem;
    border: 1px solid ${colors.secondary};
    font-family: 'Montserrat';
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

const IsError = styled.span`
  color: ${colors.warning};
  font-weight: bold;
  text-align: center;
`;

const Save = styled.button`
  background-color: ${colors.primary};
  border-radius: 0.2rem;
  border: none;
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
    opacity: 0.85;
    transition: 0.4s;
  }
`;

/**
 * Renders the 'EmployeeForm' form
 * @function EmployeeForm
 * @param {function} props: set state for isModalOpen
 * @returns {JSX}
 */
const EmployeeForm = ( props ) => {

  const { setModalIsOpen } = props
  const isLoading = false

  // local states
  const initialState = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  }
  const [error, setError] = useState(false)
  const [input, setInput] = useState(initialState)
  
  /**
   * Save new employee record to local storage
   * @function SaveEmployee
   */
  const SaveEmployee = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || []
    const employee = input
    employees.push(employee)
    localStorage.setItem('employees', JSON.stringify(employees))
  }

  /**
   * Simple validation check
   * The other inputs are handled by 'min, max, required' attributes & handleText Function
   * @function ValidateForm
   * @returns {boolean}
   */
  const ValidateForm = () => {
    return (
      input?.state &&
      usZipCodes.test(input.zipCode) &&
      input?.department ? true : false
    ) 
  }

  /**
   * @function handleSubmit
   */
  const handleSubmit = (event) => {
    event.preventDefault()
    if (ValidateForm())
      {
        setError(false)
        SaveEmployee()
        setModalIsOpen(true)
        setInput(initialState)
        event.target.reset()
      } else {
          setError(true)
        } 
  }

    /**
     * Restricts what the user can enter in the text input fields & saves to state
     * @function handleText
     * @param {object} input targeted
     */
    const handleText = (e) => {
      if (e.target.id !=='street') {
        setInput({
          ...input,
          [e.target.id]: capitalize(e.target.value.replace(/[^a-zA-ZÀ-ÿ-.\s]/g, '')).trimStart(),
        })
      }
        else {
          setInput({
            ...input,
            [e.target.id]: capitalize(e.target.value.replace(/[^0-9a-zA-Z-.\s]/g, '')).trimStart(),
          })
        }
    }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>  
        <label htmlFor="firstName">First Name</label>
          <input type="text"
            id="firstName"
            value={input.firstName}
            required={true}
            minLength={2}
            maxLength={30}
            onChange={(e) => handleText(e)}/>        

        <label htmlFor="lastName">Last Name</label>
          <input type="text"
            id="lastName" 
            value={input.lastName}
            required={true}
            minLength={2}
            maxLength={30}
            onChange={(e) => handleText(e)}/>       

        <label htmlFor="dateOfBirth">Date Of Birth</label>
          <input type="date"
            id="dateOfBirth" 
            value={input.dateOfBirth}
            required={true}
            max={SetBirthDateLimit(18)}
            min={SetBirthDateLimit(70)}
            onChange={(e) => setInput({...input, dateOfBirth: e.target.value})}/>   
        
        <label htmlFor="startDate">Start Date</label>
          <input type="date"
            id="startDate" 
            value={input.startDate}
            required={true}
            min={SetDateLimit(30)}
            max={SetDateLimit(-120)}
            onChange={(e) => setInput({...input, startDate: e.target.value})}/>   

        <FieldSet>
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input type="text"
            id="street"
            value={input.street}
            required={true}
            minLength={2}
            maxLength={60}
            onChange={(e) => handleText(e)}/> 

          <label htmlFor="city">City</label>
          <input type="text"
            id="city"
            value={input.city}
            required={true}
            minLength={2}
            maxLength={30}
            onChange={(e) => handleText(e)}/> 

          <Select 
            id={"state"}
            listItems={states}
            onChange={(e) => setInput({...input, state: e.target.value})} />
        
          <label htmlFor="zipCode">Zip Code</label>
          <input type="number"
            id="zipCode"
            placeholder='5 digits'
            value={input.zipCode}
            required={true}
            onChange={(e) => setInput({...input, zipCode: e.target.value})}/>  
        </FieldSet>
        
          <Select
            id={"department"}
            listItems={departments}
            onChange={(e) => setInput({...input, department: e.target.value})} /> 
            
            {error && <IsError>Please recheck the information entered.</IsError>}

        <Save type="submit" disabled={isLoading ? true : false}>Save</Save>
      </Form>  
    </Container>
  )
}

export default EmployeeForm
