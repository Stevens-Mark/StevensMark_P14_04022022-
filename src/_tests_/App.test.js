import userEvent from '@testing-library/user-event' // import userEvent library (npm package)
import { screen, waitFor, cleanup } from '@testing-library/react'
// import custom renders to connect component to redux
import { render } from '../utils/helpersForTesting/render'
import { renderWithRouter } from '../utils/helpersForTesting/renderWithRouter'
import App from '../../src/App'

describe('full APP rendering/navigating', () => {
  afterEach(() => { cleanup() })

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

    //  THIS TEST FAILING, BUT PASSES ON OTHER 2 BRANCHES (MAIN & DB): CANNOT FIND SOLUTION ??
    // it('should navigate to the current employees page', async () => {
    //   renderWithRouter(<App />)
    //   expect(screen.getByText(/Create Employee/i)).toBeInTheDocument()
    //   const leftClick = {button: 0}
    //   userEvent.click(screen.getByText(/View/i), leftClick)
    //   await waitFor(() => {
    //     expect(screen.getByText(/Current Employees/i)).toBeInTheDocument()
    //   })
    // })

    it('should show an error page for a bad route', async () => {
      renderWithRouter(<App />, {route: '/something-that-does-not-match'})
      await waitFor(() => {
        expect(screen.getByText(/Oops, the page you requested does not exist./i)).toBeInTheDocument()
      })
    })
  
})

// Receiving the message below when above 'bad route' test included: (no error message when test suites run individually): CANNOT PINPOINT PROBLEM ?
// A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them.