import { gql } from 'apollo-boost'
import { MESSAGE } from './fragments'

export const SEND_MESSAGE = gql`
  mutation sendMessage($sendMessageInput: SendMessageInput!) {
    sendMessage(sendMessageInput: $sendMessageInput){
      ...Message
    }
  }
  ${MESSAGE}
`
