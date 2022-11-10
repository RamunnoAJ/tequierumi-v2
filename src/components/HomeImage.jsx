import React from 'react'
import image from '../assets/product1.jpg'

export default function HomeImage() {
  return (
    <img
      src={image}
      alt='Imagen de amigurumi de un cubo didáctico'
      className='rounded-lg'
    />
  )
}
