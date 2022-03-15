
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import custom render to connect component to redux
import { render } from '../../utils/helpersForTesting/render'
// import component
import EmployeeForm from '../../components/EmployeeForm'
// import Select from '../../components/Select'

// references used for tests: 
// https://testing-library.com/docs/example-input-event/
// https://testing-library.com/docs/ecosystem-user-event/

// test setup

const setup = (label) => {
  const utils = render(<EmployeeForm />)
  const input = screen.getByLabelText(label)
  return {
    input,
     ...utils,
  }
}

// tests

describe('EmployeeForm', () => {

  it('should allow user to enter a first name', async () => {
    const {input} = setup(/First Name/i)
    userEvent.type(input, 'John')
    expect(input).toHaveValue('John')
    expect(screen.getByDisplayValue('John')).toBeInTheDocument()
  })

  it('should allow user to enter a last name', async () => {
    const {input} = setup(/Last Name/i)
    userEvent.type(input, 'Doe')
    expect(input).toHaveValue('Doe')
  })

  it('should allow user to enter a date of birth', async () => {
    const {input} = setup(/Date Of Birth/i)
    userEvent.type(input, '1969-12-17')
    expect(input).toHaveValue('1969-12-17')
    // expect(screen.getByDisplayValue('17/12/1969')).toBeInTheDocument()
  })

  it('should allow user to enter a start date', async () => {
    const {input} = setup(/Start Date/i)
    userEvent.type(input, '2022-02-28')
    expect(input).toHaveValue('2022-02-28')
    // expect(screen.getByDisplayValue('28/02/2022')).toBeInTheDocument()
  })

  it('should allow user to enter a street', async () => {
    const {input} = setup(/Street/i)
    userEvent.type(input, '123 Fake Street')
    expect(input).toHaveValue('123 Fake Street')
  })

  it('should allow user to enter a city', async () => {
    const {input} = setup(/City/i)
    userEvent.type(input, 'Fake City')
    expect(input).toHaveValue('Fake City')
  })

  // state input: full funtionality already checked in select component
 
  it('should allow user to enter a zip code', async () => {
    const {input} = setup(/Zip Code/i)
    userEvent.type(input, '12345')
    expect(input.value).toBe('12345')
  })

  // department input: full select funtionality already checked in select component

})