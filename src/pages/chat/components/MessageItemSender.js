import React from 'react'

export const MessageItemSender = (props) => (
  <div
    className='column column-50 float-left'
    style={{
      backgroundColor: '#9b4dca',
      color: '#FFF',
      marginBottom: 5,
      borderRadius: 12,
      borderTopLeftRadius: 0
    }}
  >
    {props.children}
  </div>
)
