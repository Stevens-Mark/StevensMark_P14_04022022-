import { screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import custom render to connect component to redux
import { render } from '../../utils/helpersForTesting/render'
// import component
import PickDate from '../../components/PickDate'

describe('Picker', () => {
  
  it("should NOT render the date picker until user clicks on input field", async () => {
    render(<PickDate id='Date Of Birth'/>)
    expect(screen.queryByText("Home")).not.toBeInTheDocument()
  })

  it("should render the date picker when user clicks on the input field", async () => {
    render(<PickDate id='Date Of Birth'/>)
    expect(screen.queryByText("Home")).not.toBeInTheDocument()
    const textBox = screen.getByLabelText(/Date Of Birth/i)
    fireEvent.click(textBox)
    await waitFor(() => {
      expect(screen.getByText("Home")).toBeVisible()
    })
  })

  // BEFORE: below test passed but threw error:
  // "An update to Popper inside a test was not wrapped in act(...).
  // When testing, code that causes React state updates should be wrapped into act(...):"
  // NOW corrected

  it("should allow user to enter a date", async () => {
    const onChange = jest.fn()
    render
    (<PickDate 
      id='Date Of Birth'
      onChange={onChange}
      />)
    const input = screen.getByLabelText(/Date Of Birth/i)
    userEvent.type(input, '10/06/1978')
    await waitFor(() => {
      expect(input).toHaveValue('10/06/1978')
    })
  })

})

