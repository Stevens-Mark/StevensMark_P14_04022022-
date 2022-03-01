
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import custom render to connect component to redux
import { render } from '../../utils/test/render'
// import component
import EmployeeForm from '../../components/EmployeeForm'
import Select from '../../components/Select'

// references used for tests: 
// https://testing-library.com/docs/example-input-event/
// https://testing-library.com/docs/ecosystem-user-event/

// test setup

const setup = (label) => {
  const utils = render(<EmployeeForm />)
  const input = screen.getByLabelText(label)
  return {
    input,
     ...utils,
  }
}

// tests

describe('EmployeeForm', () => {

  it('should allow user to enter a first name', () => {
    const {input} = setup(/First Name/i)
    userEvent.type(input, 'John')
    expect(input).toHaveValue('John')
  })

  it('should allow user to enter a last name', () => {
    const {input} = setup(/Last Name/i)
    userEvent.type(input, 'Doe')
    expect(input).toHaveValue('Doe')
  })

  it('should allow user to enter a date of birth', () => {
    const {input} = setup(/Date Of Birth/i)
    userEvent.type(input, '1969-12-17')
    expect(input).toHaveValue('1969-12-17')
  })

  it('should allow user to enter a start date', () => {
    const {input} = setup(/Start Date/i)
    userEvent.type(input, '2022-02-28')
    expect(input).toHaveValue('2022-02-28')
  })

  it('should allow user to enter a street', () => {
    const {input} = setup(/Street/i)
    userEvent.type(input, '123 Fake Street')
    expect(input).toHaveValue('123 Fake Street')
  })

  it('should allow user to enter a city', () => {
    const {input} = setup(/City/i)
    userEvent.type(input, 'Fake City')
    expect(input).toHaveValue('Fake City')
  })

   it('should allow user to select a state', () => {
    const onChange = jest.fn()
     render(
      <Select
      id={"state"}
      listItems={[ { "name": "Connecticut", "value": "CT" } ]}
      onChange={onChange} />)
    userEvent.selectOptions(
      screen.getByRole('combobox'),                         
      screen.getByRole('option', {name: 'Connecticut'}),    
    )
    expect(screen.getByRole('option', {name: 'Connecticut'}).selected).toBe(true)
  })
  // full funtionality already checked in select component
 
  it('should allow user to enter a zip code', () => {
    const {input} = setup(/Zip Code/i)
    userEvent.type(input, '12345')
    expect(input.value).toBe('12345')
  })

  it('should allow user to select a department', () => {
    const onChange = jest.fn()
     render(
      <Select
      id={"department"}
      listItems={[ { "name": "Engineering", "value": "Engineering" } ]}
      onChange={onChange} />)
    userEvent.selectOptions(
      screen.getByRole('combobox'),                         
      screen.getByRole('option', {name: 'Engineering'}),    
    )
    expect(screen.getByRole('option', {name: 'Engineering'}).selected).toBe(true)
  })
  // full select funtionality already checked in select component

 it('Should display an error message if first name is left empty', async () => {
    const { input } = setup(/First Name/i)
    userEvent.type(input, ' ')
    userEvent.click(screen.getByText(/save/i))
    expect(screen.getByText('Please recheck the information entered.')).toBeTruthy()
  })

  it('Should display an error message if last name is left empty', async () => {
    const { input } = setup(/Last Name/i)
    userEvent.type(input, ' ')
    userEvent.click(screen.getByText(/save/i))
    expect(screen.getByText('Please recheck the information entered.')).toBeTruthy()
  })

  it('Should display an error message if street is left empty', async () => {
    const { input } = setup(/Street/i)
    userEvent.type(input, ' ')
    userEvent.click(screen.getByText(/save/i))
    expect(screen.getByText('Please recheck the information entered.')).toBeTruthy()
  })

  it('Should display an error message if city is left empty', async () => {
    const { input } = setup(/City/i)
    userEvent.type(input, ' ')
    userEvent.click(screen.getByText(/save/i))
    expect(screen.getByText('Please recheck the information entered.')).toBeTruthy()
  })

  it('Should display an error message if State is left empty', async () => {
    const { input } = setup(/State/i)
    userEvent.type(input, ' ')
    userEvent.click(screen.getByText(/save/i))
    expect(screen.getByText('Please recheck the information entered.')).toBeTruthy()
  })

  it('Should display an error message if Zip Code is left empty', async () => {
    const { input } = setup(/Zip Code/i)
    userEvent.type(input, ' ')
    userEvent.click(screen.getByText(/save/i))
    expect(screen.getByText('Please recheck the information entered.')).toBeTruthy()
  })

  it('Should display an error message if Departments is left empty', async () => {
    const { input } = setup(/Department/i)
    userEvent.type(input, ' ')
    userEvent.click(screen.getByText(/save/i))
    expect(screen.getByText('Please recheck the information entered.')).toBeTruthy()
  })


  // it("submits", async () => {
    
  //   render(<EmployeeForm />);
  //   const handleSubmit = jest.fn();
  //   fireEvent.submit(screen.getByTestId("form"));
  //   fireEvent.click(screen.getByText('Save'));
  //   expect(handleSubmit).toHaveBeenCalled();
  // });
})