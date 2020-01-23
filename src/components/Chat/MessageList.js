import React, { useEffect } from 'react'
import { MessageItem } from './MessageItem'

export const MessageList = (props) => {
  useEffect(() => {
    props.subscribeToNewMessages()
  }, [])

  if (!props.data)
    return <p>loading...</p>

  return props.data.messages.map(message =>
    <MessageItem
      key={message.id}
      message={message} />
  )
}
