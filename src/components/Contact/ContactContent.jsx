import React from 'react'
import ContactForm from './ContactForm'

const ContactInfo = (props) => {
  const socials = [
    {
      icon: 'fa-brands fa-whatsapp',
      contact: '+54 2235126634',
      redirect:
        'https://wa.me/542235126634/?text=Buenos días!%20Quisiera%20consultar%20sobre...'
    },
    {
      icon: 'fa-brands fa-instagram',
      contact: 'Tequierumi',
      redirect: 'https://www.instagram.com/tequierumi/'
    },
    {
      icon: 'fa-brands fa-facebook',
      contact: 'Tequierumi amigurumis',
      redirect: 'https://www.facebook.com/tequierumi.amigurumis.5'
    }
  ]

  return (
    <div className='flex flex-col justify-center items-center gap-4 md:gap-8 bg-primary-500 py-8 rounded-2xl basis-1/2 max-w-sm'>
      <h2 className=' text-2xl uppercase font-medium text-slate-700'>
        {props.title}
      </h2>
      <ul className='flex flex-col justify-center gap-4'>
        {socials.map((social, index) => {
          return (
            <li key={index}>
              <a
                href={social.redirect}
                target='_blank'
                className=' cursor-pointer uppercase font-medium text-slate-700 hover:text-accent-400 transition-all duration-300 ease-in-out'
              >
                <i className={`text-accent-400 text-xl ${social.icon}`}></i>{' '}
                {social.contact}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function ContactContent() {
  return (
    <section className='max-w-7xl w-11/12 mx-auto my-10 py-4 md:py-8'>
      <div className='rounded-lg mx-auto shadow-sm py-4 md:p-8 flex flex-col md:flex-row gap-8 justify-center'>
        <ContactInfo title='Contáctanos' />
        <ContactForm title='Resuelva sus dudas' />
      </div>
    </section>
  )
}

export default ContactContent
