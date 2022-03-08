import { screen } from '@testing-library/react'
// import custom render to connect component to redux
import { render } from '../../utils/test/render'
// import component
import Title from '../../components/Title'

describe('Title', () => {

  it('should render a title passed as a parameter', async () => {

    const value = "Create Employee"

    render(<Title heading={value} />)
    expect(
      screen.getByRole('heading', {
        level: 2,
        text: 'Create Employee',
      })
    ).toBeTruthy()
  })
})