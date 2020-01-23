import { gql } from 'apollo-boost'

export const SEND_MESSAGE = gql`
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
