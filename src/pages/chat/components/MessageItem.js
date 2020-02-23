import React from 'react'
import { MessageItemSender } from './MessageItemSender'
import { MessageItemReceiver } from './MessageItemReceiver'

export const MessageItem = ({ message }) => (
  <div key={message.id} className='row'>
    <MessageItemSender>
      <b>{message.sender.name}</b>
      <p>{message.message}</p>
    </MessageItemSender>
  </div>
)
