import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import HomeImage from '../components/HomeImage'

function HomeMain() {
  return (
    <main>
      <div className='max-w-7xl w-11/12 min-h-full-screen mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 py-4 md:py-10'>
        <div className='flex flex-col gap-4 justify-center items-center basis-1/2 shrink-0'>
          <h1 className='text-center uppercase text-accent-400 font-bold text-4xl md:text-6xl'>
            Tequierumi
          </h1>
          <p className='text-center tracking-wide text-sm md:text-lg text-gray-600'>
            El mundo amigurumi es mágico. Mientras la tejedora combina puntadas,
            algo fantástico sucede: aparece la expresión y mirada que cada
            amigurumi tiene. Es esa expresión la encargada de transmitir
            ternura, calidez y todo el amor y esfuerzo que ha sido puesto en su
            creación… y esto nos llena el alma.
          </p>
          <Link to={'/store'}>
            <Button>Tienda</Button>
          </Link>
        </div>
        <div className='basis-1/2'>
          <HomeImage />
        </div>
      </div>
    </main>
  )
}

export default HomeMain
