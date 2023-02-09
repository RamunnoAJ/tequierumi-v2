function Product(props) {
  return (
    <div className='flex flex-col gap-2 hover:p-4 hover:border hover:border-accent-400 transition-all duration-300 ease-in-out'>
      <img
        src={props.image}
        alt={props.alt}
      />
      <h3 className='uppercase font-semibold'>{props.title}</h3>
      <span className=' text-gray-600 font-medium opacity-70'>
        {props.price}
      </span>
    </div>
  )
}

export default Product
