
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import custom render to connect component to redux
import { render } from '../../utils/test/render'
// import component
import Modal from '../../components/modal'

describe('Modal', () => {
  it('Should render without crashing & render a title', async () => {
    const handleClose = jest.fn()
    render(<Modal setModalIsOpen={handleClose}/>)
    expect(
      screen.getByRole('heading', {
        level: 1,
        text: 'Success !',
      })
    ).toBeTruthy()
  })

  it('should call the set state function to close the modal on click', async () => {
    const handleClose = jest.fn()
    render(<Modal setModalIsOpen={handleClose}/>)
    expect(screen.getByText(/success/i)).toBeTruthy()
    userEvent.click(screen.getByRole('button'))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('should call the set state function to close the modal on Escape key', async () => {
    const handleClose = jest.fn()
    render(<Modal setModalIsOpen={handleClose}/>)
    expect(screen.getByText(/success/i)).toBeTruthy()
    userEvent.keyboard('{esc}') 
    expect(handleClose).toHaveBeenCalledTimes(1)
  })
})

