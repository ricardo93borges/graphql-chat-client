import React from 'react'
import "milligram"
import { Chat } from './components/Chat'
import { SendForm } from './components/SendForm'

function App() {
  return (
    <div className='App'>
      <Chat />
      <SendForm />
    </div>
  )
}

export default App
