import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event' // import userEvent library (npm package)
import { render } from '../utils/test/render'
import { screen } from '@testing-library/react'
import App from '../../src/App'

// a helper function that wraps around render for testing router components
// see page https://testing-library.com/docs/example-react-router

const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui, {wrapper: BrowserRouter})
}

// the tests

describe('full APP rendering/navigating', () => {
    
    it('Should render without crashing', () => {
      render(<App />)
    })

    it('should navigate to the create employee page', () => {
      renderWithRouter(<App />)
      expect(screen.getByText(/HRNet/i)).toBeInTheDocument()
      const leftClick = {button: 0}
      userEvent.click((screen.getAllByText(/Create/i)[0]), leftClick)
      expect(screen.getByText(/Create Employee/i)).toBeInTheDocument()
    })

    it('should navigate to the current employees page', () => {
      renderWithRouter(<App />)
      expect(screen.getByText(/Create Employee/i)).toBeInTheDocument()
      const leftClick = {button: 0}
      userEvent.click(screen.getByText(/View/i), leftClick)
      expect(screen.getByText(/Current Employees/i)).toBeInTheDocument()
    })

    it('should show an error page for a bad route', () => {
      renderWithRouter(<App />, {route: '/something-that-does-not-match'})
      expect(screen.getByText(/Oops, the page you requested does not exist./i)).toBeInTheDocument()
    })

})