import { useState } from 'react'
// styling
import styled from 'styled-components'
import colors from '../styles/colors'
// import components
import Select from './Select'
// import data
import { departments } from '../assets/data/departments'
import { states } from '../assets/data/states'

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
 * @returns {JSX}
 */
const EmployeeForm = () => {

const isLoading = false

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  // local state
  const [input, setInput] = useState({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    })
    console.log(input)

  return (
    <Container>
      <Form onSubmit={handleSubmit}>  
        <label htmlFor="firstName">First Name</label>
          <input type="text"
            id="firstName"
            value={input.firstName}
            required={true}
            onChange={(e) => setInput({...input, firstName: e.target.value})}/>       

        <label htmlFor="lastName">Last Name</label>
          <input type="text"
            id="lastName" 
            value={input.lastName}
            required={true}
            onChange={(e) => setInput({...input, lastName: e.target.value})}/>       

        <label htmlFor="dateOfBirth">Date Of Birth</label>
          <input type="date"
            id="dateOfBirth" 
            value={input.birth}
            required={true}
            onChange={(e) => setInput({...input, dateOfBirth: e.target.value})}/>   
        
        <label htmlFor="startDate">Start Date</label>
          <input type="date"
            id="startDate" 
            value={input.start}
            required={true}
            onChange={(e) => setInput({...input, startDate: e.target.value})}/>  

        <FieldSet>
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input type="text"
            id="street"
            value={input.street}
            required={true}
            onChange={(e) => setInput({...input, street: e.target.value})}/>  

          <label htmlFor="city">City</label>
          <input type="text"
            id="city"
            value={input.city}
            required={true}
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

        <Save type="submit" disabled={isLoading ? true : false}>Save</Save>
      </Form>  
    </Container>
  )
}

export default EmployeeForm
