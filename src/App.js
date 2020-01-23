import React from 'react'
import 'milligram'
import { Chat } from './features/chat'
import { SendForm } from './features/chat/components/SendForm'

function App () {
  return (
    <div className='App'>
      <Chat />
      <SendForm />
    </div>
  )
}

export default App
