import { screen } from '@testing-library/react'
// import custom render to connect component to redux
import { render } from '../utils/helpersForTesting/render'
// import component
import  { Notify }  from '../components/other/Notify'

describe('Notify', () => {

  it('should render an alert message', async () => {
    render(<Notify delay="3000">Record Deleted</Notify>)
    expect(screen.getByText('Record Deleted')).toBeTruthy()
  })
})