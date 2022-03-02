// import { render } from '../../utils/test/render'
import { screen, render } from '@testing-library/react'
// import component
import Title from '../../components/Title'

describe('Title', () => {

  it('should render a title passed as a parameter', () => {

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