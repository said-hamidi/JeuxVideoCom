import React from 'react'
import Login from '../screens/login.js'
import Jeuxvideo from '../screens/jeuxvideo.js'
import Forum from '../screens/forum.js'


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
        <Route path='/jeuxvideo.com' component={Jeuxvideo}></Route>
        <Route path='/forum' component={Forum}></Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default Routes
