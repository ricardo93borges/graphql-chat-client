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
