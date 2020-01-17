import React from 'react';

export const MessageItem = ({ message }) => (
  <div key={message.id} >
    <b>{message.sender.name}</b>
    <p>{message.message}</p>
  </div >
)
