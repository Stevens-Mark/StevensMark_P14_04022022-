import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { lazy, Suspense, useEffect } from 'react'
import { useStore } from 'react-redux'
// import for function to fetch data
import { fetchEmployees } from './Redux/employeesSlice'
// component imports
import Header from './components/Header'
import Footer from './components/Footer'
import Notification from './components/Notification'

// use lazy loading to import components just when needed
const CreateEmployee = lazy(() => import('./pages/CreateEmployee'))
const CurrentEmployees = lazy(() => import('./pages/CurrentEmployees'))
const EditEmployee = lazy(() => import('./pages/EditEmployee'))
const Error = lazy(() => import('./pages/Error'))
const GoToTop = lazy(() => import('./utils/GoToTop'))
const renderLoader = () => <div>Loading...</div>

/**
 * Manages routes & renders pages
 * @function App
 * @returns {JSX}
 */
export default function App() {

  // import employee data from db
  const store = useStore()
  useEffect(() => {
    fetchEmployees(store)
  }, [store])

  return (  
    <>
    <Suspense fallback={renderLoader()}>
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={CreateEmployee}/>
            <Route exact path="/employees" component={CurrentEmployees}/>
            <Route exact path="/employees/edit/:id" component={EditEmployee}/>
            <Route path='*' component={Error}/>
          </Switch> 
          <Notification />
        <Footer />
        <GoToTop />
      </Router>  
    </Suspense>
    </>
  )
}
