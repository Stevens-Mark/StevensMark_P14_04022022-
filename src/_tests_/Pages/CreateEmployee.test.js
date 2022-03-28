import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import custom render to connect component to redux
import { render } from '../../utils/helpersForTesting/render'
// import component
import CreateEmployee from '../../pages/CreateEmployee'



// ONLY ADD THIS CODE WHEN USING TEST COLLECTION
// OTHERWISE IT WILL WRITE TO REAL FIREBASE DATABASE
  
// mimic user adding GOOD/VALID employee data for a new record

// test setup

// const setup = () => {
//   // render employee page (with form)
// const utils = render(<CreateEmployee />)

// const firstName = screen.getByLabelText(/First Name/i)
// userEvent.type(firstName, 'John')

// const lastName = screen.getByLabelText(/Last Name/i)
// userEvent.type(lastName, 'Doe')

// const dateOfBirth = screen.getByLabelText(/Date Of Birth/i)
// userEvent.type(dateOfBirth , '1969-12-17')    // date picker format yyyy-mm-dd

// const startDate = screen.getByLabelText(/Start Date/i)
// userEvent.type(startDate, '2022-02-28')   // date picker format yyyy-mm-dd

// const street = screen.getByLabelText(/Street/i)
// userEvent.type(street, '123 Fake Street')

// const city = screen.getByLabelText(/City/i)
// userEvent.type(city, 'Fake City')

// const state = screen.getByLabelText(/State/i)
// userEvent.selectOptions(state, screen.getByRole('option', {name: 'Arizona'}),)

// const zipCode = screen.getByLabelText(/Zip Code/i)
// userEvent.type(zipCode, '12345')

// const department = screen.getByLabelText(/Department/i)
// userEvent.selectOptions(department, screen.getByRole('option', {name: 'Engineering'}),)

// // click save button: submit form for validation
// userEvent.click(screen.getByText(/save/i))

// return {
//       firstName,
//       lastName,
//       dateOfBirth,
//       startDate,
//       street,
//       city,
//       state,
//       zipCode,
//       department,

//       ...utils,
//     }
// }

// // AND ASSOCIATED TEST WITH ABOVE SETUP
// it('should open the modal when user input (new employee record) is validated', async () => {
//   setup()
//   await waitFor(() => {
//     expect(screen.getByText(/Success !/i)).toBeTruthy()
//   })
// })


// mimic user adding BAD INVALID employee data for a new record
// test setup

const badInput = () => {
  // render employee page (with form)
const utils = render(<CreateEmployee />)

const firstName = screen.getByLabelText(/First Name/i)
userEvent.type(firstName, 'J')

const lastName = screen.getByLabelText(/Last Name/i)
userEvent.type(lastName, 'D')

const dateOfBirth = screen.getByLabelText(/Date Of Birth/i)
userEvent.type(dateOfBirth , '1969-12-17')    // date picker format yyyy-mm-dd

const startDate = screen.getByLabelText(/Start Date/i)
userEvent.type(startDate, '2022-02-28')   // date picker format yyyy-mm-dd

const street = screen.getByLabelText(/Street/i)
userEvent.type(street, '1')

const city = screen.getByLabelText(/City/i)
userEvent.type(city, 'F')

const state = screen.getByLabelText(/State/i)
userEvent.selectOptions(state, screen.getByRole('option', {name: 'Arizona'}),)

const zipCode = screen.getByLabelText(/Zip Code/i)
userEvent.type(zipCode, '1')

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

  // this test timed out so adjusted jest.Timeout to 10000
  it('should display the relevant error message if the corresponding input is NOT valid', async () => {
    badInput()
    await waitFor(() => {
      expect(screen.getByText("⚠️ First Name: 2 letters min.")).toBeTruthy()
    })
    await waitFor(() => {
      expect(screen.getByText("⚠️ Last Name: 2 letters min.")).toBeTruthy()
    })
    await waitFor(() => {
      expect(screen.getByText("⚠️ Please check address")).toBeTruthy()
    })
    await waitFor(() => {
      expect(screen.getByText("⚠️ Please check city name")).toBeTruthy()
    })
    await waitFor(() => {
      expect(screen.getByText("⚠️ Should be 5 digits")).toBeTruthy()
    })
  }, 10000)
    
})

