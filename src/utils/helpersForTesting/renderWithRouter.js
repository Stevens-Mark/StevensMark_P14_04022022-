import { BrowserRouter } from 'react-router-dom'
// import custom render to connect component to redux
import { render } from './render'

// a helper function that wraps around render for testing router components
// see page https://testing-library.com/docs/example-react-router

export const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui, {wrapper: BrowserRouter})
}