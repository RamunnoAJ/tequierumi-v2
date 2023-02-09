import { useState } from 'react'
import { getDataFromDB } from '../../utils/getDataFromDB'

export const StoreSearchInput = ({ setProds }) => {
  const [search, setSearch] = useState('')
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = () => {
    if (search) {
      getDataFromDB('./json/products.json').then((products) => {
        const filteredProducts = products.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        )
        setProds(filteredProducts)
      })
    } else {
      getDataFromDB('./json/products.json').then((products) =>
        setProds(products)
      )
    }
    setSearch('')
  }

  return (
    <div className='flex items-center self-center justify-between max-w-sm p-2 bg-white shadow-xl lg:self-start md:py-4 md:px-8 md:max-w-md'>
      <div className='flex flex-row items-center'>
        <label htmlFor='search'>
          <i className='mr-4 fa-solid fa-magnifying-glass'></i>
        </label>
        <input
          type={'text'}
          value={search}
          onChange={handleSearch}
          placeholder={'Buscar por nombre'}
          className='p-1 md:px-4'
          id='search'
          autoComplete={'false'}
        />
      </div>
      <button
        type='button'
        onClick={handleSubmit}
        className='px-2 py-1 font-medium transition-all duration-300 ease-in-out border border-black hover:bg-primary-500'>
        Buscar
      </button>
    </div>
  )
}
