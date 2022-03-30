
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import custom render to connect component to redux
import { render } from '../../utils/helpersForTesting/render'
// import component (from my custom npm package)
import { Modal } from 'react-custom-modal-by-msparkystevens'

// test setup
const closeModal = jest.fn()
const renderModal = () => {
  render(<Modal closeModal={closeModal} modalTheme={{}} heading="Success !"/>)
}

// tests
describe('Modal', () => {
  
  it('Should render without crashing & render a title', async () => {
    renderModal()
    expect(
      screen.getByRole('heading', {
        level: 1,
        text: 'Success !',
      })
    ).toBeTruthy()
  })

  it('should call function to close the modal on click', async  () => {
    renderModal()
    expect(screen.getByText(/success/i)).toBeTruthy()
    userEvent.click(screen.getByRole('button'))
    expect(closeModal).toHaveBeenCalledTimes(1)
  })

  it('should call the function to close the modal on Escape key', async () => {
    renderModal()
    expect(screen.getByText(/success/i)).toBeTruthy()
    userEvent.keyboard('{esc}') 
    expect(closeModal).toHaveBeenCalledTimes(1)
  })
})

// test to check if modal opens after valid data entry is checked in createEmployees.test.js