import userEvent from '@testing-library/user-event' // import userEvent library (npm package)
import { screen, waitFor } from '@testing-library/react'
// import custom renders to connect component to redux
import { renderWithRouter } from '../../utils/helpersForTesting/renderWithRouter'
import App from '../../App'

// this test uses real data from MongoDB to pass (if record deleted then tests will fails)

describe('EmployeeEditForm', () => {

  it('should display the employee modify form with the pre-filled information', async () => {
    renderWithRouter(<App />)
    await waitFor(() => {
      expect(screen.getByText(/Create Employee/i)).toBeInTheDocument()
    })

    const leftClick = {button: 0}
    userEvent.click(screen.getByText(/View/i), leftClick)
          
    await waitFor(() => {
      expect(screen.getByText(/Current Employees/i)).toBeInTheDocument()
    })
    userEvent.click(screen.getAllByText(/Modify/i)[0], leftClick)
    await waitFor(() => {
      expect(screen.getByText(/Modify Employee/i)).toBeInTheDocument()
    })
    await waitFor(() => {
      expect(screen.getByDisplayValue('John')).toBeInTheDocument()
    })
    expect(screen.getByDisplayValue('Doe')).toBeInTheDocument()
    expect(screen.getByDisplayValue('2004-04-01')).toBeInTheDocument()
    expect(screen.getByDisplayValue('2022-04-01')).toBeInTheDocument()
    expect(screen.getByDisplayValue('123 Fake Street')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Fake City')).toBeInTheDocument()
    expect(screen.getByDisplayValue('12345')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Engineering')).toBeInTheDocument()
  })

})