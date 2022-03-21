import reducer from '../../Redux/employeesSlice'

describe('Employees reducer', () => {

  const initialState = 
    {
      isLoading: false,
      employees: [],
      isError: '',
    }
    
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
        expect(reducer(undefined, {})).toEqual
        ({
          isLoading: false,
          employees: [],
          isError: '', })
        })
 
    it('should return the state initial  when state is undefined', () => {
        expect(reducer(undefined, { type: '@INIT' })).toEqual
        ({
          isLoading: false,
          employees: [],
          isError: '', }) 
        })
  
    it('should return state isLoading true when data is loading', () => {
      expect(reducer(initialState, { type: 'employee/requesting' })).toEqual
      ({
        isLoading: true,
        employees: [],
        isError: '', }) 
      })

    it('should return updated employee state when data has loaded', () => {
      expect(reducer(initialState, { 
        type: 'employee/resolved', 
        payload: dataToAdd , })).toEqual
        ({
          isLoading: false,
          employees: dataToAdd,
          isError: '', }) 
        })

    it('should return error state if request rejected', () => {
      expect(reducer(initialState, { type: 'employee/rejected',
      payload: "error message" ,  })).toEqual
      ({
        isLoading: false,
        employees: [],
        isError: "error message", }) 
      })

    it('should return state on invalid action', () => {
        expect(reducer(initialState, { type: 'INVALID' })).toEqual
        ({
          isLoading: false,
          employees: [],
          isError: '', })
        })

})