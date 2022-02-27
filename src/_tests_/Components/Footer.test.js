import { render } from '../../utils/test/render'
import { screen, fireEvent } from '@testing-library/react'
import Footer from '../../components/Footer'


describe('Footer', () => {
  it('Should render without crashing', async () => {
    render(<Footer />)
  })

  it('Should change theme', async () => {
    render(<Footer />)
    const nightModeButton = screen.getByRole('button')
    expect(nightModeButton.textContent).toBe('Change mode : ☀️')
    fireEvent.click(nightModeButton)
    expect(nightModeButton.textContent).toBe('Change mode : 🌙')
  })
})
