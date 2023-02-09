function Product({ item }) {
  return (
    <div className='flex flex-col max-w-xs gap-4 p-6 transition-all duration-300 ease-in-out bg-white shadow-lg rounded-xl'>
      <img
        src={item.image}
        alt={item.alt}
        className='rounded-lg'
      />
      <h3 className='self-center font-semibold uppercase'>{item.name}</h3>
      <span className='self-center font-medium text-gray-600 opacity-70'>
        ${item.price}
      </span>
      <button className='px-4 py-2 font-medium uppercase transition-all duration-500 ease-in-out bg-primary-500 hover:bg-accent-400 rounded-xl'>
        Ver Producto
      </button>
    </div>
  )
}

export default Product
