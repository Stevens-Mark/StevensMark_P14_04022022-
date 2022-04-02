import reducer from '../../Redux/employeesSlice'

describe('Employees reducer', () => {

  const initialState = 
    {
      isLoading: false,
      employees: [],
      isError: '',
      isModifyError: '',
      isDeleting: false,
      isDeleteError: ''
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
    
    it('should return the initial state when state is undefined', async () => {
        expect(reducer(undefined, {})).toEqual
        ({
          isLoading: false,
          employees: [],
          isError: '',
          isModifyError: '',
          isDeleting: false,
          isDeleteError: '' })
        })
 
    it('should return the state initial when state is undefined', async () => {
        expect(reducer(undefined, { type: '@INIT' })).toEqual
        ({
          isLoading: false,
          employees: [],
          isError: '', 
          isModifyError: '',
          isDeleting: false,
          isDeleteError: '' }) 
        })
  
    it('should return state isLoading true when data is loading', async () => {
      expect(reducer(initialState, { type: 'employee/requesting' })).toEqual
      ({
        isLoading: true,
        employees: [],
        isError: '', 
        isModifyError: '',
        isDeleting: false,
        isDeleteError: '' }) 
      })

    it('should return updated employee state when data has loaded', async () => {
      expect(reducer(initialState, { 
        type: 'employee/resolved', 
        payload: dataToAdd , })).toEqual
        ({
          isLoading: false,
          employees: dataToAdd,
          isError: '', 
          isModifyError: '',
          isDeleting: false,
          isDeleteError: '' }) 
        })

    it('should return error state if request rejected', async () => {
      expect(reducer(initialState, { type: 'employee/rejected',
      payload: "error message" ,  })).toEqual
      ({
        isLoading: false,
        employees: [],
        isError: "error message", 
        isModifyError: '',
        isDeleting: false,
        isDeleteError: '' }) 
      })

    it('should return state isLoading true during add new employee request', async () => {
      expect(reducer(initialState, { type: 'employee/addRequesting' })).toEqual
      ({
        isLoading: true,
        employees: [],
        isError: '', 
        isModifyError: '',
        isDeleting: false,
        isDeleteError: '' }) 
      })
  
    it('should return updated employee state when a new employee added', async () => {
      expect(reducer(initialState, { 
        type: 'employee/addResolved', 
        payload: dataToAdd , })).toEqual
        ({
          isLoading: false,
          employees: [ dataToAdd ],
          isError: '', 
          isModifyError: '',
          isDeleting: false,
          isDeleteError: '' }) 
        })
  
    it('should return error state if adding a new employee rejected', async () => {
      expect(reducer(initialState, { type: 'employee/addRejected',
      payload: "error message" ,  })).toEqual
      ({
        isLoading: false,
        employees: [],
        isError: "error message",
        isModifyError: '',
        isDeleting: false,
        isDeleteError: '' }) 
      })

    it('should return state on invalid action', async () => {
        expect(reducer(initialState, { type: 'INVALID' })).toEqual
        ({
          isLoading: false,
          employees: [],
          isError: '', 
          isModifyError: '',
          isDeleting: false,
          isDeleteError: '' })
        })

})