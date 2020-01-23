import { gql } from 'apollo-boost'

export const MESSAGES = gql`
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
