import { gql } from 'apollo-boost'

export const USERS = gql`
  query Users {
    users {
      id
      name
      email
    }
  } 
`
