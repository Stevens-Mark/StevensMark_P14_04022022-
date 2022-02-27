import { render } from '../../utils/test/render'
import CreateEmployee from '../../pages/CreateEmployee'

describe('CreateEmployees', () => {
  it('Should render without crashing', async () => {
    render(<CreateEmployee />)
  })
})