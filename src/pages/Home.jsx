import React from 'react'

import Header from '../components/Header'
import HomeMain from '../components/HomeMain'
import HomeProcess from '../components/HomeProcess'
import HomeStore from '../components/HomeStore'
import HomeContact from '../components/HomeContact'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <HomeMain />
      <HomeProcess />
      <HomeStore />
      <HomeContact />
      <Footer />
    </>
  )
}

export default Home
