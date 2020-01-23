import { gql } from 'apollo-boost'
import { MESSAGE } from './fragments'

export const MESSAGES = gql`
{
  messages {
    ...Message
  }
}
${MESSAGE}
`
