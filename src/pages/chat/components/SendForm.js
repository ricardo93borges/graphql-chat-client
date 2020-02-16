import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { SEND_MESSAGE } from '../mutations'

export const SendForm = () => {
  let input
  const [sendMessage] = useMutation(SEND_MESSAGE)

  return (
    <label>
      <input type='text' ref={node => { input = node }} />
      <button onClick={e => {
        e.preventDefault()
        sendMessage({
          variables: {
            sendMessageInput: {
              message: input.value,
              receiverId: '2'
            }
          }
        })
      }}
      >
        Send
      </button>
    </label>
  )
}
