import React from 'react'

export const MessageItemSender = ({ message }) => (
  <div className='row'>
    <div className='column' />
    <div
      className='column column-50'
      style={{
        backgroundColor: '#9b4dca',
        color: '#FFF',
        marginBottom: 5,
        borderRadius: 12,
        borderTopLeftRadius: 0
      }}
    >
      <b>{message.sender.name}</b>
      <p>{message.message}</p>
    </div>
  </div>
)
