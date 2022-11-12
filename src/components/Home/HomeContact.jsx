import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'

function HomeContact() {
  return (
    <section className='py-4 md:py-10 mt-10'>
      <div className='max-w-7xl w-11/12 mx-auto'>
        <div className='flex items-center justify-between gap-2 max-w-3xl mx-auto'>
          <p className='text-lg tracking-wide opacity-70'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link to={'/contact'}>
            <Button>Contacto</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeContact
