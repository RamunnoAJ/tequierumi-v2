import { Link, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <div className='w-screen h-screen bg-primary-400'>
      <div
        id='error-page'
        className='flex flex-col items-center justify-center w-full h-full gap-4'>
        <h1 className='text-5xl font-black'>Ups!</h1>
        <p className='text-xl'>
          Parece que estás intentando entrar a una página que no existe.
        </p>
        <p className='text-2xl'>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to={'/'}>
          <button className='px-6 py-2 text-xl font-medium transition-all duration-300 ease-in-out bg-white rounded hover:bg-accent-400'>
            Volver al inicio
          </button>
        </Link>
      </div>
    </div>
  )
}
