import { screen } from '@testing-library/react'
// import custom render to connect component to redux
import { render } from '../../utils/helpersForTesting/render'
// import component
import Header from '../../components/Header'

describe('Header', () => {
  
  it('Should render without crashing', async () => {
    render(<Header />)
  })

  it('should render a title', async () => {
    render(<Header />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        text: 'Wealth Health',
      })
    ).toBeTruthy()
  })
})

