// import custom render to connect component to redux
import { render } from '../../utils/test/render'
// imort component
import CreateEmployee from '../../pages/CreateEmployee'

describe('CreateEmployees', () => {
  it('Should render without crashing', async () => {
    render(<CreateEmployee />)
  })
})