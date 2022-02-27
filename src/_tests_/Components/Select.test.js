
import { render } from '../../utils/test/render'
import { screen } from '@testing-library/react'
import Select from '../../components/Select'

const onChange = jest.fn()
const departments = [
  {
      "name": "Sales",
      "value": "Sales"
  },
  {
      "name": "Marketing",
      "value": "Marketing"
  },
  {
      "name": "Engineering",
      "value": "Engineering"
  },
  {
      "name": "Human Resources",
      "value": "Human Resources"
  },
  {
      "name": "Legal",
      "value": "Legal"
  }
]

describe('Select', () => {
  test('Should render a select dropdown', async () => {
    render(
      <Select
      id={"department"}
      listItems={departments}
      onChange={onChange} /> 
    )

  })

})