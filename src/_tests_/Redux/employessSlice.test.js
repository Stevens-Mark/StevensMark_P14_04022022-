import reducer, { addEmployee, fetchEmployees } from '../../Redux/employeesSlice'
import mockData from '../../assets/data/MOCK_DATA_FOR_TESTING.json'
 
// tests (the mockData in MOCK_DATA_FOR_TESTING.json is need for the tests, if removed some tests will fail)

describe('Employees reducer', () => {

  const dataToAdd = 
    { 
      firstName: "John",
      lastName :"Doe",
      dateOfBirth: "03/01/2004",
      startDate: "03/02/2022",
      street: "123 Fake Street",
      city: "Fake City",
      state: "KY",
      zipCode: "12345",
      department: "Engineering"
    }
  
    it('should return the initial state when state is undefined', () => {
        expect(reducer(undefined, {})).toEqual( { employees: [] } )
    })
 
    it('should return the state initial  when state is undefined', () => {
        expect(reducer(undefined, { type: '@INIT' })).toEqual( { employees: [] } )
    })

    it('should add mocked employee', () => {
      expect(reducer( { employees: [] }, fetchEmployees())).toEqual( { employees: mockData })
  })

    it('should add an employee', () => {
        expect(reducer( { employees: [] }, addEmployee( { dataToAdd } ))).toEqual( { employees: [ ...mockData, { dataToAdd } ] })
    })

    it('should return state on invalid action', () => {
        expect(reducer( { employees: [] }, { type: 'INVALID' })).toEqual( { employees: [] } )
    })

})