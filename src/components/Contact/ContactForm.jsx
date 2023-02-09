import Button from '../Button'

function ContactForm(props) {
  return (
    <form
      action='https://formsubmit.co/aebbad3500545f6a1b453acc0a5c33bf'
      method='post'
      target='_blank'
      className='grid py-2 px-4 max-w-xl gap-4 basis-1/2'>
      <h2 className='uppercase text-2xl font-medium text-center text-slate-700'>
        {props.title}
      </h2>
      <div className='flex flex-col gap-1'>
        <label
          htmlFor='name'
          className='text-slate-700'>
          Ingrese su nombre:
        </label>
        <input
          id='name'
          name='Nombre'
          type='text'
          className='border rounded'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label
          htmlFor='phone'
          className='text-slate-700'>
          Ingrese su número telefónico:
        </label>
        <input
          id='phone'
          name='Teléfono'
          type='number'
          className='border rounded'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label
          htmlFor='message'
          className='text-slate-700'>
          Dejenos aquí su mensaje:
        </label>
        <textarea
          id='message'
          name='Consulta'
          cols='30'
          rows='10'
          className='border rounded resize-none'></textarea>
      </div>
      <Button type='submit'>Enviar</Button>
    </form>
  )
}

export default ContactForm
