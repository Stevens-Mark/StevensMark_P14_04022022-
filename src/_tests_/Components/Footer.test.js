import { screen, fireEvent } from '@testing-library/react'
// import custom render to connect component to redux
import { render } from '../../utils/test/render'
// import component
import Footer from '../../components/Footer'


describe('Footer', () => {
  it('Should render without crashing', () => {
    render(<Footer />)
  })

  it('Should change theme', () => {
    render(<Footer />)
    const nightModeButton = screen.getByRole('button')
    expect(nightModeButton.textContent).toBe('Change mode : ☀️')
    fireEvent.click(nightModeButton)
    expect(nightModeButton.textContent).toBe('Change mode : 🌙')
  })
})
