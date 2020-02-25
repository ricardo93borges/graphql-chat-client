import React from 'react'

export const MessageItemReceiver = (props) => (
  <div
    className='column column-50 float-left'
    style={{
      backgroundColor: '#e1e1e1',
      marginBottom: 5,
      borderRadius: 12,
      borderTopLeftRadius: 0
    }}
  >
    {props.children}
  </div>
)
