import { Link } from 'react-router-dom'
import Logo from './icons/Logo'

function Footer() {
  const fbLink = 'https://www.facebook.com/tequierumi.amigurumis.5'
  const igLink = 'https://www.instagram.com/tequierumi/'

  return (
    <footer className='bg-primary-400 py-8 mt-10'>
      <div className='max-w-5xl mx-auto w-11/12 grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center items-center'>
        <Link to={'/'}>
          <Logo />
        </Link>
        <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
          <ul className='text-gray-600 opacity-60 font-medium flex flex-col  gap-1'>
            <li>
              <Link
                to={'/'}
                className='hover:text-accent-400 transition-all duration-300 ease-out'>
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to={'/store'}
                className='hover:text-accent-400 transition-all duration-300 ease-out'>
                Tienda
              </Link>
            </li>
            <li>
              <Link
                to={'/contact'}
                className='hover:text-accent-400 transition-all duration-300 ease-out'>
                Contacto
              </Link>
            </li>
            <li>
              <Link
                to={'/about-us'}
                className='hover:text-accent-400 transition-all duration-300 ease-out'>
                Quienes Somos
              </Link>
            </li>
            <li>
              <Link
                to={'/login'}
                className='hover:text-accent-400 transition-all duration-300 ease-out'>
                Cuenta
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex md:flex-col items-center justify-center gap-4 text-gray-600 opacity-60 text-l col-span-2 md:col-span-1 font-medium'>
          <a
            href={fbLink}
            rel='noreferrer'
            target='_blank'
            className='hover:text-accent-400 transition-all duration-300 ease-out'>
            <i className='fa-brands fa-facebook'></i> Facebook
          </a>
          <a
            href={igLink}
            target='_blank'
            rel='noreferrer'
            className='hover:text-accent-400 transition-all duration-300 ease-out'>
            <i className='fa-brands fa-instagram'></i> Instagram
          </a>
        </div>
        <hr className=' h-[1.5px] w-full bg-accent-400 col-span-3' />
        <p className='col-span-3 text-gray-600 text-xs opacity-60'>
          Copyright 2022 - Tequierumi, todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
