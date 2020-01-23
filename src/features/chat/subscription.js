import { gql } from 'apollo-boost'
import { MESSAGE } from './fragments'

export const MESSAGES_SUBSCRIPTION = gql`
  subscription messageSent {
    messageSent {
      ...Message
    }
  }
  ${MESSAGE}
`
