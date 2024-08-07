import React from 'react'
import Navbar from '../Componants/Navbar'
import Banner from '../Componants/Banner'
import Footer from '../Componants/Footer'
import FreeBook from '../Componants/FreeBook'
function Home() {
  return (
        <>
        <Navbar></Navbar>
        <Banner/>
        <FreeBook></FreeBook>
        <Footer></Footer>
        </>
  )
}

export default Home