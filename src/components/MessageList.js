import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { MessageItem } from './MessageItem';

const MESSAGES = gql`
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
`;

export const MessageList = () => {
  const { loading, error, data } = useQuery(MESSAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.messages.map(message => <MessageItem key={message.id} message={message} />);
}
