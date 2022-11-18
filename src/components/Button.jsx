import React from 'react'

function Button(props) {
  return (
    <button
      className='uppercase bg-transparent min-w-[130px] h-10 cursor-pointer transition-all duration-300 ease-in-out relative border border-black after:w-full after:h-full after:absolute after:-z-10 after:top-1 after:left-1 after:transition-all after:duration-300 after:ease-in-out after:bg-accent-400 hover:after:top-0 hover:after:left-0'
      type={props.type}
    >
      {props.children}
    </button>
  )
}

export default Button
