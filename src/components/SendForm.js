import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const ADD_TODO = gql`
  mutation sendMessage($sendMessageInput: SendMessageInput!) {
    sendMessage(sendMessageInput: $sendMessageInput){
      id
      message
      sender {
        id
        name
      }
      receiver {
        id
        name
      }
    }
  }
`

export const SendForm = () => {
  let input
  const [sendMessage] = useMutation(ADD_TODO)

  return (
    <label>
      <input type='text' ref={node => { input = node }} />
      <button onClick={e => {
        e.preventDefault()
        sendMessage({
          variables: {
            sendMessageInput: {
              message: input.value,
              senderId: '1',
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
