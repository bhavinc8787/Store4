import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import { Link } from 'react-router-dom'
function Cource() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px20 px-4'> 
     <div className='mt-28 items-center justify-center text-center'>
       <h1 className='text-2xl font-semibold md:text-4xl'>We Are Deliget To See you {""}<span className='text-pink-600'> Here :)</span> </h1>
       <h2 className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, cum? Nihil recusandae, neque delectus accusamus quam impedit, vero quia placeat, quo provident aliquam. Mollitia obcaecati temporibus minima voluptatem, aperiam aliquid? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis reiciendis itaque ipsam dignissimos nobis voluptas officia eligendi possimus ab? Numquam natus eius quo earum nulla pariatur, recusandae nesciunt quisquam a.</h2>
      <Link to={"/"}>
      <button className='bg-pink-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-pink-800 duration-200'>Back</button>
      </Link>
      </div>
      <div className=' mt-4 grid grid-cols-1 md:grid-cols-4'>
       {
          list.map((item)=>(
            <Cards key={item.id} item={item}  />
        ))
       }
      </div>
     </div>
     </>
  )
}

export default Cource