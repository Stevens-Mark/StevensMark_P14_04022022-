
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import custom render to connect component to redux
import { render } from '../../utils/test/render'
// import component
import Select from '../../components/Select'

// test setup data

const onChange = jest.fn()

const correctOptionsOrder = ["Engineering", "Human Resources", "Legal", "Marketing", "Sales"]

const listItems = [
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

// tests

describe('Select', () => {
  it('Should render a select dropdown', async () => {
    render(
      <Select
      id={"department"}
      listItems={listItems}
      onChange={onChange} /> 
    )
  })

  it('should correctly set default option', async () => {
    render(
      <Select
      id={"department"}
      listItems={listItems}
      onChange={onChange} /> 
      )
    expect(screen.getByRole('option', {name: 'Select a department'}).selected).toBe(true)
  })

  it('should display the correct number of options', async () => {
    render(
      <Select
      id={"department"}
      listItems={listItems}
      onChange={onChange} />
      )
    expect(screen.getAllByRole('option').length).toBe(listItems.length+1)  //add 1 for the default option
  })

  it('should display the options in alphabetic order (but with the default in first position)', async () => {
    render(
      <Select
      id={"department"}
      listItems={listItems}
      onChange={onChange} />
      )                         // slice() to remove the default "Select a ..." in order to check sort correctly
      const renderedNames = screen.getAllByRole('option').slice(1)  
      renderedNames.forEach((nameNode, index) => {
        expect(nameNode.textContent).toBe(correctOptionsOrder[index])
      })
  })

  it('should allow user to change the option', async () => {
    render(
      <Select
      id={"department"}
      listItems={listItems}
      onChange={onChange} />)

    userEvent.selectOptions(
      screen.getByLabelText(/Department/i),                  // Find the select element, like a real user would.
      screen.getByRole('option', {name: 'Engineering'}),    // Find and select the Engineering option, like a real user would.
    )
    expect(screen.getByRole('option', {name: 'Engineering'}).selected).toBe(true)
    expect(screen.getByRole('combobox').value).toBe('Engineering')
  })

  it('should allow user to change the state option & return correct country code', async () => {

    const states = [
      {
          "name": "American Samoa",
          "value": "AS"
      },
      {
          "name": "Arizona",
          "value": "AZ"
      },
      {
          "name": "California",
          "value": "CA"
      }
    ]

    render(
      <Select
      id={"state"}
      listItems={states}
      onChange={onChange} />)

    userEvent.selectOptions(
      screen.getByLabelText(/State/i),                        
      screen.getByRole('option', {name: 'Arizona'}),    
    )
    expect(screen.getByRole('option', {name: 'Arizona'}).selected).toBe(true)
    expect(screen.getByRole('combobox').value).toBe('AZ')
  })
})
