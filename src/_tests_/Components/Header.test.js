import { render } from '../../utils/test/render'
import { screen } from '@testing-library/react'
import Header from '../../components/Header'

describe('Header', () => {
  it('Should render without crashing', async () => {
    render(<Header />)
  })

  it('should render a title', () => {
    render(<Header />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        text: 'Wealth Health',
      })
    ).toBeTruthy()
  })
})

