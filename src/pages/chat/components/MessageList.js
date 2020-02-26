import React, { useEffect } from 'react'
import { MessageItemSender } from './MessageItemSender'
import { MessageItemReceiver } from './MessageItemReceiver'
import { decode } from '../../../session'

const user = decode()

export const MessageList = (props) => {
  useEffect(() => {
    props.subscribeToNewMessages()
  }, [])

  if (!props.data) { return <p>loading...</p> }

  return props.data.conversation.map(message =>
    user.id === parseInt(message.sender.id, 10)
      ? <MessageItemSender key={message.id} message={message} />
      : <MessageItemReceiver key={message.id} message={message} />
  )
}
