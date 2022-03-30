// import custom render to connect component to redux
import { render } from '../../utils/helpersForTesting/render'
// import component
import CurrentEmployees from '../../pages/CurrentEmployees'

describe('CurrentEmployees', () => {
  
  it('should render without crashing', async () => {
    render(<CurrentEmployees />)
  })
})