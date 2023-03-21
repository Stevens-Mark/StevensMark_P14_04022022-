import userEvent from '@testing-library/user-event' // import userEvent library (npm package)
import { screen, waitFor } from '@testing-library/react'
// import custom renders to connect component to redux
import { render } from '../utils/helpersForTesting/render'
import { renderWithRouter } from '../utils/helpersForTesting/renderWithRouter'
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
      await waitFor(() => {
        expect(screen.getByText(/Create Employee/i)).toBeInTheDocument()
      })
    })

    // this test does not always pass for some reason (even when code not changed??)
    it('should navigate to the current employees page', async () => {
      renderWithRouter(<App />)
      expect(screen.getByText(/Create Employee/i)).toBeInTheDocument()
      const leftClick = {button: 0}
      userEvent.click(screen.getByText(/View/i), leftClick)
      await waitFor(() => {
        expect(screen.getByText(/Current Employees/i)).toBeInTheDocument()
      })
     })

    it('should show current employees page', async () => {
      renderWithRouter(<App />, {route: '/employees'})
      await waitFor(() => {
        expect(screen.getByText(/Current Employees/i)).toBeInTheDocument()
      })
    })

    it('should show an error page for a bad route', async () => {
      renderWithRouter(<App />, {route: '/something-that-does-not-match'})
      await waitFor(() => {
        expect(screen.getByText(/Oops, the page you requested does not exist./i)).toBeInTheDocument()
      })
    })

    // this test uses real data from MongoDB to pass (if record deleted then tests will fails)
  
    it('should navigate to the modify employee page & display prefilled information', async () => {
      renderWithRouter(<App />)
      expect(screen.getByText(/Create Employee/i)).toBeInTheDocument()
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
      expect(screen.getByDisplayValue('Leave This')).toBeInTheDocument()})
      expect(screen.getByDisplayValue('For Testing')).toBeInTheDocument()
      expect(screen.getByDisplayValue('1969-01-01')).toBeInTheDocument()
      expect(screen.getByDisplayValue('2023-04-01')).toBeInTheDocument()
      expect(screen.getByDisplayValue('Test Street')).toBeInTheDocument()
      expect(screen.getByDisplayValue('Test City')).toBeInTheDocument()
      expect(screen.getByDisplayValue('12345')).toBeInTheDocument()
      expect(screen.getByDisplayValue('Engineering')).toBeInTheDocument()})
})
