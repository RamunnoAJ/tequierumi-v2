import Home from './pages/Home'
import Store from './pages/Store'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ErrorPage from './pages/ErrorPage'

import { Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'
import { ProtectedRoute } from './components/ProtectedRoute'

export const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route
          path='/'
          element={<Home />}
          errorElement={<ErrorPage />}
        />
        <Route
          path='/store'
          element={<Store />}
          errorElement={<ErrorPage />}
        />
        <Route
          path='/about-us'
          element={<AboutUs />}
          errorElement={<ErrorPage />}
        />
        <Route
          path='/contact'
          element={<Contact />}
          errorElement={<ErrorPage />}
        />
        <Route
          path='/login'
          element={<Login />}
          errorElement={<ErrorPage />}
        />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
          errorElement={<ErrorPage />}
        />
      </Routes>
    </AuthContextProvider>
  )
}
