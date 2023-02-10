import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../contexts/AuthContext'

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { signIn, googleSignIn } = UserAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await signIn(email, password)
      navigate('/dashboard')
    } catch {
      setError('Fallo al iniciar sesión')
    }

    setLoading(false)
  }

  async function handleGoogleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await googleSignIn()
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  return (
    <form className='flex flex-col gap-4'>
      {error && (
        <span className='text-red-500 font-bold text-2xl'>{error}</span>
      )}
      <div className='flex flex-col'>
        <label
          htmlFor='email'
          className='text-lg font-medium text-gray-600'>
          Email:
        </label>
        <input
          type='email'
          id='email'
          required
          onChange={handleEmailChange}
          className='px-2 py-1 rounded-lg focus-visible:outline-none focus-visible:outline-accent-400'
          autoComplete='on'
        />
      </div>
      <div className='flex flex-col'>
        <label
          htmlFor='password'
          className='text-lg font-medium text-gray-600'>
          Contraseña:
        </label>
        <input
          type='password'
          id='password'
          required
          onChange={handlePasswordChange}
          className='px-2 py-1 rounded-lg focus-visible:outline-none focus-visible:outline-accent-400'
          autoComplete='off'
        />
      </div>
      <div className='flex flex-row justify-center gap-4 md:justify-end '>
        <button
          disabled={loading}
          onClick={handleGoogleSubmit}
          type='button'
          className='px-4 py-2 font-bold uppercase transition-all duration-300 ease-in-out bg-white rounded-full hover:bg-slate-100'>
          <i className='fa-brands fa-google'></i>
        </button>
        <button
          disabled={loading}
          type='submit'
          onClick={handleSubmit}
          className='px-4 py-2 font-bold uppercase transition-all duration-300 ease-in-out rounded bg-slate-100 hover:bg-accent-400'>
          Iniciar Sesión
        </button>
      </div>
    </form>
  )
}
