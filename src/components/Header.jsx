import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './icons/Logo'

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const handleSetIsNavExpanded = () => {
    setIsNavExpanded(!isNavExpanded)
  }

  return (
    <header className='bg-primary-400 py-8 relative'>
      <div className='max-w-7xl mx-auto flex justify-between w-11/12 items-center'>
        <Link to={'/'}>
          <Logo />
        </Link>
        <nav>
          <ul
            className={`${
              isNavExpanded ? '-left-0' : '-left-[100%]'
            } flex flex-col items-center justify-center w-full  md:flex-row gap-4 text-accent-400 font-semibold absolute  top-32 z-10 bg-primary-400 transition-all duration-300 ease-in-out py-4 md:static md:gap-8`}
          >
            <li>
              <Link
                to={'/'}
                className='hover:text-black transition-all duration-300 ease-in-out'
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to={'/store'}
                className='hover:text-black transition-all duration-300 ease-in-out'
              >
                Tienda
              </Link>
            </li>
            <li>
              <Link
                to={'/contact'}
                className='hover:text-black transition-all duration-300 ease-in-out'
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link
                to={'/about-us'}
                className='hover:text-black transition-all duration-300 ease-in-out'
              >
                Quienes Somos
              </Link>
            </li>
            <li>
              <Link
                to={'/login'}
                className='hover:text-black transition-all duration-300 ease-in-out'
              >
                <i className='fa-solid fa-user'></i>
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={`${
            isNavExpanded && 'active'
          } block cursor-pointer hamburguer md:hidden`}
          onClick={() => handleSetIsNavExpanded()}
        >
          <span className='w-[25px] h-[3px] block bg-accent-400 my-[5px] mx-auto rounded transition-all duration-300 ease-in-out'></span>
          <span className='w-[25px] h-[3px] block bg-accent-400 my-[5px] mx-auto rounded transition-all duration-300 ease-in-out'></span>
          <span className='w-[25px] h-[3px] block bg-accent-400 my-[5px] mx-auto rounded transition-all duration-300 ease-in-out'></span>
        </div>
      </div>
    </header>
  )
}

export default Header
