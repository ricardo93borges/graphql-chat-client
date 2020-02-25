import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { USERS } from './queries'

export const Contacts = ({ history }) => {
  const { loading, error, data } = useQuery(USERS)

  if (loading) return 'loading ...'

  if (error) return `Error: ${error.message}`

  return (
    <>
      {data.users.map(user =>
        <div key={user.id} className='row'>
          <div className='column' />
          <div className='column' style={{ textAlign: 'center' }}>
            <button
              className='button button-outline'
              onClick={() => history.push(`/chat/${user.id}`)}
            >
              {user.name}
            </button>
          </div>
          <div className='column' />
        </div>
      )}
    </>

  )
}
