import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { SEND_MESSAGE } from '../mutations'

export const SendForm = ({ receiverId }) => {
  let input
  const [sendMessage] = useMutation(SEND_MESSAGE)

  return (
    <div className='row'>
      <div className='column column-80'>
        <input type='text' ref={node => { input = node }} />
      </div>
      <div className='column column-20'>
        <button onClick={e => {
          e.preventDefault()
          sendMessage({
            variables: {
              sendMessageInput: {
                receiverId,
                message: input.value
              }
            }
          })
        }}
        >
          Send
      </button>
      </div>
    </div>
  )
}
