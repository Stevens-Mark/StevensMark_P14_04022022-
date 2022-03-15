import { screen, waitFor } from '@testing-library/react'
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
userEvent.type(dateOfBirth , '17/12/1969')

const startDate = screen.getByLabelText(/Start Date/i)
userEvent.type(startDate, '28/02/2022')

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

  it('Should render without crashing', () => {
    render(<CreateEmployee />)
  })

  it('should open the modal when user input (new employee record) is validated', () => {
    setup()
    expect(screen.getByText(/Success !/i)).toBeTruthy()
  })

  it('should NOT show an error message if valid input (new employee record) entered', () => {
    setup()
    expect(screen.queryByText(/Please recheck the information entered./i)).not.toBeInTheDocument()
  })

  it('should close the modal when user clicks on the close button', async () => {
    setup()
    const close = screen.getByRole('button', {name: 'Close'})
    userEvent.click(close)
    await waitFor(() => {
      expect(screen.queryByText(/Success !/i)).not.toBeInTheDocument()
    })
  })
})

