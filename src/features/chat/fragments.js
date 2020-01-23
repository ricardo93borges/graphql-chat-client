import { gql } from 'apollo-boost'

export const USER = gql`
  fragment User on User {
    id
    name
    email
  }
`

export const MESSAGE = gql`
  fragment Message on Message {
    id
    message
    sender {
      ...User
    }
    receiver {
      ...User
    }
  }
  ${USER}
`
