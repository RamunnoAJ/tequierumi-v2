import { Navigate } from 'react-router-dom'
import { UserAuth } from '../contexts/AuthContext'

export const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth()

  if (!user) {
    return <Navigate to='/' />
  }
  return children
}
