// import PropTypes from 'prop-types'
// import mockedData from '../../assets/data/MOCK_DATA.json'
// import { useDispatch } from 'react-redux'
// import { employeesAdd } from '../../Redux/employees'

// const setLocalStorage = () => {

//   const dispatch = useDispatch()

//   // const employeesList = JSON.parse(localStorage.getItem('employees')) || [] 
//   mockedData.forEach(employee => dispatch(employeesAdd(employee))

//   )  


  

// }

// export default setLocalStorage

// // Prototypes
// setLocalStorage.propTypes = {
//   props: PropTypes.object,
// }







// const employeesList = JSON.parse(localStorage.getItem('employees')) || [] // ONLY FOR DEMO otherwise REMOVE THIS CODE
//   mockedData.forEach(employee => employeesList.push(employee))       // if no employees data held in localStorage already...
//   localStorage.setItem('employees', JSON.stringify(employeesList))  // Add mock employee records. 

  // /**
  //  * Save new employee record to local storage
  //  * @function SaveEmployee
  //  */
  //  const SaveEmployee = () => {
  //   // const employees = JSON.parse(localStorage.getItem('employees')) || []
  //   const employee = input
  //   // employees.push(employee)
  //   // localStorage.setItem('employees', JSON.stringify(employees))
  //   dispatch(addEmployee(employee))
  // }