import React from 'react'

export const MessageItemReceiver = ({ message }) => (
  <div className='row'>
    <div
      className='column column-50'
      style={{
        backgroundColor: '#e1e1e1',
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
