
import { screen, fireEvent} from '@testing-library/react'
// import custom render to connect component to redux
import { render } from '../../utils/test/render'
// import component
import Modal from '../../components/modal'

test('modal shows the children and a close button', () => {
  // Arrange
  const handleClose = jest.fn()

  // Act
  render(
    <Modal onClose={handleClose}/>)
  // Assert
  expect(screen.getByText(/success/i)).toBeTruthy()

  // Act
  fireEvent.click(screen.getByRole('button'))

  // Assert
  expect(handleClose).toHaveBeenCalledTimes(1)
})