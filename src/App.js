import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, {  lazy, Suspense } from 'react'
// component imports
import Header from './components/Header'
import Footer from './components/Footer'
// import components when needed using lazy loading
export const CreateEmployee = lazy(() => import('./pages/CreateEmployee'))
export const CurrentEmployees = lazy(() => import('./pages/CurrentEmployees'))
export const Error = lazy(() => import('./pages/Error'))
const GoToTop = lazy(() => import('./utils/GoToTop'))
const renderLoader = () => <p>Loading...</p>

/**
 * Manages routes & renders pages
 * @function App
 * @returns {JSX}
 */
export default function App() {
  
  return (   
    <>
      <Suspense fallback={renderLoader()}>
        <Router>
          <Header />
            <Switch>
              <Route exact path="/" component={CreateEmployee}/>
              <Route exact path="/employees" component={CurrentEmployees}/>
              <Route path='*' component={Error}/>
            </Switch> 
          <Footer />
          <GoToTop />
        </Router>  
      </Suspense>
    </>
  )
}
