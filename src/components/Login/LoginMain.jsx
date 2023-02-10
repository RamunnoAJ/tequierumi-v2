import { LoginForm } from './LoginForm'

export const LoginMain = () => {
  return (
    <main className='w-11/12 mx-auto my-10 max-w-7xl'>
      <div className='flex flex-col max-w-lg gap-4 p-8 mx-auto rounded-lg md:py-16 bg-primary-400'>
        <h1 className='text-4xl font-bold text-center uppercase text-accent-400 '>
          Bienvenido!
        </h1>
        <p className='mb-4 text-sm tracking-wide text-gray-600 md:text-lg'>
          Ingresa tus datos para iniciar sesión
        </p>
        <LoginForm />
      </div>
    </main>
  )
}
