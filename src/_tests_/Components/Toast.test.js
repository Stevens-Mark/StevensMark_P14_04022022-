import { screen } from '@testing-library/react'
// import custom render to connect component to redux
import { render } from '../../utils/helpersForTesting/render'
// import component
import Toast from '../../components/Toast'

const toastTheme = {
  positionTop: '',
  positionBottom: '5px',
  positionLeft: '',
  positonRight: '5px',
  autoDelete: true,
  deleteDelay: 3000
}

const notifications = [{
  id: '1',
  title: 'Success',
  description: 'Connected To Database',
  backgroundColor: '#5cb85c',
  icon: '✅'
}]

describe('Toast', () => {

  it('should render a title', async () => {
    render(<Toast theme={toastTheme} toastList={notifications}/>)
    expect(
      screen.getByRole('heading', {
        level: 1,
        text: 'Success',
      })
    ).toBeTruthy()
  })
})

it('should render a short message', async () => {
  render(<Toast theme={toastTheme} toastList={notifications}/>)
  expect(
    screen.getByText('Connected To Database')).toBeTruthy()
})

it('should render an icon', async () => {
  render(<Toast theme={toastTheme} toastList={notifications}/>)
  expect(
    screen.getByText('✅')).toBeTruthy()
})
