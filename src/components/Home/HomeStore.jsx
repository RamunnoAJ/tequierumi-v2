import Product from '../Product'

function HomeStore() {
  const products = [
    {
      image: './assets/product1.jpg',
      alt: 'Imagen de amigurumi',
      title: 'Producto',
      price: '$500',
    },
    {
      image: './assets/product1.jpg',
      alt: 'Imagen de amigurumi',
      title: 'Producto',
      price: '$500',
    },
    {
      image: './assets/product1.jpg',
      alt: 'Imagen de amigurumi',
      title: 'Producto',
      price: '$500',
    },
    {
      image: './assets/product1.jpg',
      alt: 'Imagen de amigurumi',
      title: 'Producto',
      price: '$500',
    },
  ]

  return (
    <section className='bg-primary-400 py-4 md:py-8 mt-10'>
      <div className='mx-auto max-w-7xl w-11/12'>
        <h2 className='text-center font-semibold text-slate-700 text-xl md:text-3xl uppercase pt-4'>
          Productos Destacados
        </h2>
        <div className='grid grid-cols-auto-fit gap-4 mt-10 justify-center'>
          {products.map((product, index) => (
            <Product
              image={product.image}
              alt={product.alt}
              title={product.title}
              price={product.price}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeStore
