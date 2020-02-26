import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { CONVERSATION } from './queries'
import { MESSAGES_SUBSCRIPTION } from './subscription'
import { MessageList } from './components/MessageList'
import { SendForm } from './components/SendForm'

const handleNewMessage = (subscribeToMore) => {
  subscribeToMore({
    document: MESSAGES_SUBSCRIPTION,
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data) return prev
      const newMessage = subscriptionData.data.messageSent

      return {
        conversation: [...prev.conversation, newMessage]
      }
    }
  })
}

export const Chat = ({ match }) => {
  const { subscribeToMore, ...result } = useQuery(CONVERSATION, {
    variables: {
      cursor: '0',
      receiverId: match.params.id
    }
  })

  return (
    <>
      <div
        className='row'
        style={{
          height: window.innerHeight - 250,
          overflowY: 'scroll',
          marginBottom: 10
        }}>
        <div className='column'>
          <MessageList
            {...result}
            subscribeToNewMessages={() => handleNewMessage(subscribeToMore)}
          />
        </div>
      </div>
      <SendForm receiverId={match.params.id} />
    </>
  )
}
