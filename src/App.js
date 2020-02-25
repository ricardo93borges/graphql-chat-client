import 'milligram'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Chat } from './pages/chat'
import { Login } from './pages/login'
import { Contacts } from './pages/contacts'

export const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/login' component={Login} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/chat/:id' component={Chat} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
