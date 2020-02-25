import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='row'>
      <div className='column' />
      <div className='column'>
        <h2 style={{ textAlign: 'center', marginBottom: 50 }}>Chat App</h2>
      </div>
      <div className='column'>
        <div className='float-right' style={{ marginTop: '10px' }}>
          <Link to='/contacts'>Contacts</Link>
          <Link to='/login'>{localStorage.token ? ' Logout' : ' Login'}</Link>
        </div>
      </div>
    </div>
  )
}
