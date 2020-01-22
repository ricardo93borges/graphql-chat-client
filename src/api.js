import ApolloClient from 'apollo-boost'

export const api = new ApolloClient({
  uri: process.env.REACT_APP_API_URL
})
