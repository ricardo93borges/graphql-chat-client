import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { MessageList } from './MessageList'

const MESSAGES = gql`
{
  messages {
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

const MESSAGES_SUBSCRIPTION = gql`
  subscription messageSent {
    messageSent {
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

const handleNewMessage = (subscribeToMore) => {
  subscribeToMore({
    document: MESSAGES_SUBSCRIPTION,
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data) return prev
      const newFeedItem = subscriptionData.data.messageSent

      return {
        messages: [...prev.messages, newFeedItem]
      }
    }
  })
}

export const Chat = () => {
  const { subscribeToMore, ...result } = useQuery(MESSAGES)

  return (
    <MessageList
      {...result}
      subscribeToNewMessages={() => handleNewMessage(subscribeToMore)}
    />
  )
}
