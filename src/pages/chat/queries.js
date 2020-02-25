import { gql } from 'apollo-boost'
import { MESSAGE } from './fragments'

export const MESSAGES = gql`
  query Messages($cursor: String!) {
    messages(cursor: $cursor) {
      ...Message
    }
  } 
  ${MESSAGE}
`

export const CONVERSATION = gql`
  query Conversation($cursor: String!, $receiverId: ID!) {
    conversation(cursor: $cursor, receiverId: $receiverId) {
      ...Message
    }
  } 
  ${MESSAGE}
`
