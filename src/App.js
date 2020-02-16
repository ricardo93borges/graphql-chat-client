import 'milligram'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Chat } from './pages/chat'
import { Login } from './pages/login'

export const App = () => {
  return (
    <div className='container'>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Chat} />
          <Route path='/login' component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}