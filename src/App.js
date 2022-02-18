import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// component imports
import Header from './components/Header'
import CreateEmployee from './pages/CreateEmployee'
import CurrentEmployees from './pages/CurrentEmployees'
import  Error from './pages/Error'
import Footer from './components/Footer'
import GoToTop from './utils/GoToTop'

/**
 * Manages routes & renders pages
 * @function App
 * @returns {JSX}
 */
export default function App() {
  return (   
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
  )
}
