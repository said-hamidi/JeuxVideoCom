import React from 'react'
import Login from '../screens/login'
import Questions from '../screens/questions'


import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/questions' component={Questions}></Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default Routes
