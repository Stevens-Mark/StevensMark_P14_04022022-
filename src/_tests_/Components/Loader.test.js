import { screen } from '@testing-library/react'
// import custom render to connect component to redux
import { render } from '../../utils/helpersForTesting/render'
// import component
import Loader from '../../components/other/loadingIcon'

describe('Loader', () => {
  it('Should render a loading icon', async () => {
    render(<Loader />)
    expect(screen.getByTestId('loader')).toBeTruthy()
  })
})
