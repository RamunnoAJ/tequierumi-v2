import { useEffect, useState } from 'react'
import Product from '../Product'
import { getDataFromDB } from '../../utils/getDataFromDB'
import { StoreSearchInput } from './StoreSearchInput'

function StoreProducts() {
  const [prods, setProds] = useState([])

  useEffect(() => {
    getDataFromDB('./json/products.json').then((products) => setProds(products))
  }, [])

  return (
    <section className='py-4 border-t bg-primary-400 md:py-8 border-accent-400'>
      <div className='flex flex-col w-11/12 mx-auto max-w-7xl'>
        <div className='flex flex-col justify-between md:flex-row'>
          <h2 className='pt-4 mb-4 text-3xl font-semibold text-center uppercase md:mb-8 text-slate-700 md:text-5xl'>
            Tienda
          </h2>
          <StoreSearchInput
            prods={prods}
            setProds={setProds}
          />
        </div>
        <div className='grid justify-center gap-4 mt-10 grid-cols-auto-fit md:gap-6'>
          {prods.map((prod) => (
            <Product
              item={prod}
              key={prod.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StoreProducts
