// import custom render to connect component to redux
import { render } from '../../utils/test/render'
// imort component
import CurrentEmployees from '../../pages/CurrentEmployees'

describe('CreateEmployees', () => {
  it.only('should render without crashing', async () => {
    render(<CurrentEmployees />)
  })
})