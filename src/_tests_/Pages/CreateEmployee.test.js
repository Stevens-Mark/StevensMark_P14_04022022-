import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import custom render to connect component to redux
import { render } from '../../utils/test/render'
// imort component
import CreateEmployee from '../../pages/CreateEmployee'

// test setup

const setup = () => {
  // render employee page (with form)
const utils = render(<CreateEmployee />)

 // mimic user adding employee data for a new record
const firstName = screen.getByLabelText(/First Name/i)
userEvent.type(firstName, 'John')

const lastName = screen.getByLabelText(/Last Name/i)
userEvent.type(lastName, 'Doe')

const dateOfBirth = screen.getByLabelText(/Date Of Birth/i)
userEvent.type(dateOfBirth , '1969-12-17')

const startDate = screen.getByLabelText(/Start Date/i)
userEvent.type(startDate, '2022-02-28')

const street = screen.getByLabelText(/Street/i)
userEvent.type(street, '123 Fake Street')

const city = screen.getByLabelText(/City/i)
userEvent.type(city, 'Fake City')

const state = screen.getByLabelText(/State/i)
userEvent.selectOptions(state, screen.getByRole('option', {name: 'Arizona'}),)

const zipCode = screen.getByLabelText(/Zip Code/i)
userEvent.type(zipCode, '12345')

const department = screen.getByLabelText(/Department/i)
userEvent.selectOptions(department, screen.getByRole('option', {name: 'Engineering'}),)

// click save button: submit form for validation
userEvent.click(screen.getByText(/save/i))

return {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      state,
      zipCode,
      department,

      ...utils,
    }
}


// tests 

describe('CreateEmployees', () => {

  it('Should render without crashing', async () => {
    render(<CreateEmployee />)
  })

  it('should open the modal when user input ( new employee record) is validated', async () => {
    setup()
    expect(screen.getByText('Success !')).toBeTruthy()
  })

})



// it.only('state', () => {
//   render(<CreateEmployee />)
//   const department = screen.getByLabelText(/department/i)
//   userEvent.selectOptions(department, screen.getByRole('option', {name: 'Engineering'}),)
//   expect(screen.getByRole('option', {name: 'Engineering'}).selected).toBe(true)
//   expect(department.value).toBe('Engineering')
// })