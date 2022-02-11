import { useState } from 'react'
// styling
import styled from 'styled-components'
import colors from '../styles/colors'
// import data FOR dropdown menus
import { departments } from '../assets/data/departments'
import { states } from '../assets/data/states'
// import components
import Select from './Select'
// import functions & constants
import { 
    usZipCodes,
    textRegex,
    addressRegex,
    AgeNotValidate,
    ValidStartDate
 } from '../utils/functions/validation'

/**
 * CSS for the component using styled.components
 */

const Container = styled.div`
  display :flex;
  justify-content: center;
  padding: 0 0 20px;
`;

const Form = styled.form`
  background: ${colors.tertiary};
  font-family: 'Montserrat';
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  width: 300px;
  
  label {
    font-weight: bold;
  }

  input, select {
    border-radius: 0.2rem;
    border: 1px solid black;
    font-family: 'Montserrat';
    font-size: 1rem;
    margin: 0.5rem 0rem 1rem;
    padding: 6px;
  }
  @media screen and (min-width: 475px) {
    width: 400px;
  }
`;

const FieldSet = styled.fieldset`
  margin: 1rem 0rem;
  display: flex;
  flex-direction: column;
`;

const IsError = styled.span`
  text-align: center;
  font-weight: bold;
  color: ${colors.warning};
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
   * Save new employyee record to local storage
   * @function SaveEmployee
   */
  const SaveEmployee = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || []
    const employee = input
    employees.push(employee)
    localStorage.setItem('employees', JSON.stringify(employees))
  }

  /**
   * Simple validaion check of data entered by user
   * @function ValidateForm
   * @returns {boolean}
   */
  const ValidateForm = () => {
    return (
      textRegex.test(input.firstName) &&
      textRegex.test(input.lastName) &&
      !AgeNotValidate(input.dateOfBirth) &&
      ValidStartDate(input.startDate) &&
      addressRegex.test(input.street) &&
      textRegex.test(input.city) &&
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
            onChange={(e) => setInput({...input, firstName: e.target.value})}/>       

        <label htmlFor="lastName">Last Name</label>
          <input type="text"
            id="lastName" 
            value={input.lastName}
            required={true}
            minLength={2}
            maxLength={30}
            onChange={(e) => setInput({...input, lastName: e.target.value})}/>       

        <label htmlFor="dateOfBirth">Date Of Birth</label>
          <input type="date"
            id="dateOfBirth" 
            value={input.dateOfBirth}
            required={true}
            onChange={(e) => setInput({...input, dateOfBirth: e.target.value})}/>   
        
        <label htmlFor="startDate">Start Date</label>
          <input type="date"
            id="startDate" 
            value={input.startDate}
            required={true}
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
            onChange={(e) => setInput({...input, street: e.target.value})}/>  

          <label htmlFor="city">City</label>
          <input type="text"
            id="city"
            value={input.city}
            required={true}
            minLength={2}
            maxLength={30}
            onChange={(e) => setInput({...input, city: e.target.value})}/>  

          <Select 
            id={"state"}
            listItems={states}
            onChange={(e) => setInput({...input, state: e.target.value})} />
        
          <label htmlFor="zipCode">Zip Code</label>
          <input type="number"
            id="zipCode"
            value={input.zipCode}
            required={true}
            onChange={(e) => setInput({...input, zipCode: e.target.value})}/>  
        </FieldSet>
        
          <Select
            id={"department"}
            listItems={departments}
            onChange={(e) => setInput({...input, department: e.target.value})} />
            
            {error && <IsError>'Please recheck the information entered.'</IsError>}

        <Save type="submit" disabled={isLoading ? true : false}>Save</Save>
      </Form>  
    </Container>
  )
}

export default EmployeeForm
