import React from 'react'

function HomeProcess() {
  const items = [
    {
      title: 'Encargas',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt.',
      icon: 'fa-solid fa-envelope'
    },
    {
      title: 'Tejemos',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt.',
      icon: 'fa-solid fa-wand-magic-sparkles'
    },
    {
      title: 'Entregamos',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt.',
      icon: 'fa-solid fa-truck-fast'
    }
  ]

  return (
    <section className='py-4 md:py-10'>
      <div className='max-w-7xl w-11/12 mx-auto'>
        <h2 className='uppercase text-slate-700 font-semibold text-xl md:text-3xl text-center mb-4 md:mb-8'>
          Nuestro Proceso
        </h2>
        <div className='grid md:grid-cols-3.'>
          <div className='flex justify-center items-center flex-col md:flex-row gap-4 md:gap-8'>
            {items.map((item, index) => (
              <div
                className='bg-gray-100 py-4 md:py-8 w-72 rounded-lg flex flex-col justify-center items-center gap-4'
                key={index}
              >
                <h3 className='uppercase font-semibold text-slate-700 text-xl flex items-center gap-4'>
                  {item.title}{' '}
                  <i className={`${item.icon} text-2xl text-slate-700`}></i>
                </h3>
                <p className='text-center text-slate-700 opacity-80'>
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeProcess
