
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import custom render to connect component to redux
import { render } from '../../utils/helpersForTesting/render'
// import component (from my custom npm package)
import{ Modal } from 'react-custom-modal-by-msparkystevens'

describe('Modal', () => {
  it('Should render without crashing & render a title', async () => {
    const closeModal = jest.fn()
    render(<Modal closeModal={closeModal} modalTheme={{}} heading="Success !"/>)
    expect(
      screen.getByRole('heading', {
        level: 1,
        text: 'Success !',
      })
    ).toBeTruthy()
  })

  it('should call the set state function to close the modal on click', async  () => {
    const closeModal = jest.fn()
    render(<Modal closeModal={closeModal} modalTheme={{}} heading="Success !"/>)
    expect(screen.getByText(/success/i)).toBeTruthy()
    userEvent.click(screen.getByRole('button'))
    expect(closeModal).toHaveBeenCalledTimes(1)
  })

  it('should call the set state function to close the modal on Escape key', async () => {
    const closeModal = jest.fn()
    render(<Modal closeModal={closeModal} modalTheme={{}} heading="Success !"/>)
    expect(screen.getByText(/success/i)).toBeTruthy()
    userEvent.keyboard('{esc}') 
    expect(closeModal).toHaveBeenCalledTimes(1)
  })
})

// tests to check if modal opens after valid data entry & closes when close button is clicked is checked in createEmployees.test.js