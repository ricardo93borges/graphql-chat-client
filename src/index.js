import 'milligram'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { Chat } from './pages/chat'
import { Login } from './pages/login'
import * as serviceWorker from './serviceWorker'
import { client } from './api'
import { Header } from './components/Header'

ReactDOM.render(
  <ApolloProvider client={client}>
    <div className='container'>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path='/chat' component={Chat} />
          <Route path='/login' component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  </ApolloProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
