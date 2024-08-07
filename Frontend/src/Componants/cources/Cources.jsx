import React from 'react'
import Navbar from '../Navbar'
import Cards from '../Cards'
import Footer from '../Footer'
import Cource from '../Cource'
import list  from "../../../public/list.json"
function Cources() {
  return (
<>
 <Navbar/>
   <div className='min-h-screen'>
    <Cource/>
   </div>
 <Footer/>
</>
  )
}

export default Cources