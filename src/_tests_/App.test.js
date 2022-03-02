import userEvent from '@testing-library/user-event' // import userEvent library (npm package)
import { screen } from '@testing-library/react'
// import custom renders to connect component to redux
import { render } from '../utils/test/render'
import { renderWithRouter } from '../utils/test/renderWithRouter'
import App from '../../src/App'


describe('full APP rendering/navigating', () => {
    
    it('Should render without crashing', async () => {
      render(<App />)
    })

    it('should navigate to the create employee page', async () => {
      renderWithRouter(<App />)
      expect(screen.getByText(/HRNet/i)).toBeInTheDocument()
      const leftClick = {button: 0}
      userEvent.click((screen.getAllByText(/Create/i)[0]), leftClick)
      expect(screen.getByText(/Create Employee/i)).toBeInTheDocument()
    })

    it('should navigate to the current employees page', async () => {
      renderWithRouter(<App />)
      expect(screen.getByText(/Create Employee/i)).toBeInTheDocument()
      const leftClick = {button: 0}
      userEvent.click(screen.getByText(/View/i), leftClick)
      expect(screen.getByText(/Current Employees/i)).toBeInTheDocument()
    })

    it('should show an error page for a bad route', async () => {
      renderWithRouter(<App />, {route: '/something-that-does-not-match'})
      expect(screen.getByText(/Oops, the page you requested does not exist./i)).toBeInTheDocument()
    })

})