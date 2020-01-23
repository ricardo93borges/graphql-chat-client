import { gql } from 'apollo-boost'

export const MESSAGES_SUBSCRIPTION = gql`
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
