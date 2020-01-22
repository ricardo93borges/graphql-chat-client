import React from 'react'
import "milligram"
import { MessageList } from './components/MessageList'
import { SendForm } from './components/SendForm'

function App() {
  return (
    <div className='App'>
      <MessageList />
      <SendForm />
    </div>
  )
}

export default App
