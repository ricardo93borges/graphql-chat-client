import jwt from 'jsonwebtoken'

export const decode = () => {
  return jwt.decode(localStorage.getItem('token'))
}
