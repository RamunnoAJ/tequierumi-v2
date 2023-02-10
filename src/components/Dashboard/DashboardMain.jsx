import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../contexts/AuthContext'
export const DashboardMain = () => {
  const { user, logout } = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className='max-w-7xl w-11/12 mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between'>
      <div>
        <h1 className='text-sm tracking-wide text-gray-600 md:text-lg'>
          Bienvenido al panel de usuario!
        </h1>
        <p className='text-center text-sm tracking-wide text-gray-600 md:text-lg'>
          Has iniciado sesión como:
          <span className='font-medium'> {user.email}</span>
        </p>
      </div>
      <button
        className='px-4 py-2 font-bold uppercase transition-all duration-300 ease-in-out rounded bg-slate-100 hover:bg-accent-400'
        onClick={handleLogout}>
        Cerrar sesión
      </button>
    </section>
  )
}
