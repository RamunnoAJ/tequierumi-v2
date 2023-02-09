import { useEffect, useState } from 'react'
import { getDataFromDB } from '../../utils/getDataFromDB'
import Product from '../Product'

function HomeStore() {
  const [prods, setProds] = useState([])

  useEffect(() => {
    getDataFromDB('./json/products.json').then((products) => {
      setProds(products)
    })
  }, [])

  return (
    <section className='bg-primary-400 py-4 md:py-8 mt-10'>
      <div className='mx-auto max-w-7xl w-11/12'>
        <h2 className='text-center font-semibold text-slate-700 text-xl md:text-3xl uppercase pt-4'>
          Productos Destacados
        </h2>
        <div className='grid grid-cols-auto-fit gap-4 mt-10 justify-center'>
          {prods.slice(0, 4).map((product) => (
            <Product
              item={product}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeStore
