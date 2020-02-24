import React, { useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN } from './mutations'

export const Login = ({ history }) => {
  useEffect(() => {
    localStorage.removeItem('token')
  }, [])

  let email
  let password
  const [login, { data }] = useMutation(LOGIN)

  if (data) {
    localStorage.setItem('token', data.login)
    history.push('/')
  }

  return (
    <div className='row'>
      <div className='column column-50 column-offset-25'>
        <form>
          <div className='row'>
            <div className='column column-50 column-offset-25'>
              <label>
                Email
                  <input
                  type='email'
                  name='email'
                  ref={node => { email = node }}
                />
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='column column-50 column-offset-25'>
              <label>
                Password
                  <input
                  type='password'
                  name='email'
                  ref={node => { password = node }}
                />
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='column column-50 column-offset-25'>
              <button
                className='float-right'
                onClick={e => {
                  e.preventDefault()
                  login({ variables: { email: email.value, password: password.value } })
                }}
              >
                Login
                </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
