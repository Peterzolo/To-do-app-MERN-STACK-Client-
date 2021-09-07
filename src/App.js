import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './component/navbar/Navbar'
import Todos from './component/todo/Todos'
import Login from './component/user/Login'
import Register from './component/user/Register'

export const App = () => {
  return (
   <>
  <Router>
     <Navbar/>
    <Switch>
   <Route path = '/register' component ={Register}/>
   <Route path = '/login' component ={Login}/>
   <Route path = '/' component ={Todos}/>
   </Switch>
  </Router>
   </>
  )
}

export default App