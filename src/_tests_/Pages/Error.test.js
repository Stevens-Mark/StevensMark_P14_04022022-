import userEvent from '@testing-library/user-event' // import userEvent library (npm package)
import { screen, waitFor } from '@testing-library/react'
// import custom renders to connect component to redux
import { renderWithRouter } from '../../utils/helpersForTesting/renderWithRouter'
import { render } from '../../utils/helpersForTesting/render'
// import component
import Error from '../../pages/Error'


describe('Error page', () => {
  it('Should render without crashing', async () => {
    render(<Error />)
  })

  it('should render a 404 message', async () => {
    render(<Error />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        text: '404',
      })
    ).toBeTruthy()
  })

  it('should navigate back to the create employee page', async () => {
    renderWithRouter(<Error />)
    expect(screen.getByText(/404/i)).toBeInTheDocument()
    const leftClick = {button: 0}
    userEvent.click(screen.getByText(/Return to the Create Employee page/i), leftClick)
    await waitFor(() => {
      expect(screen.getByText(/Create Employee/i)).toBeInTheDocument()
    })
    
  })
})