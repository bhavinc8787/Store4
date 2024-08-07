import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
    <div>
    <div id=" " className="flex h-screen items-center justify-center ">
      <div className="border-[10] shadow-md p-10 rounded-md modal-box">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
       
        <h3 className="font-bold text-lg">Sign Up</h3>
        <div className='mt-4'>
            <span className='mt-2'>Name</span> <br />
            <input type="text" placeholder='Enter Your Full Name here...' className='border rounded-md px-3 w-70 mt-1 py-1'/> 
            <br />
            <span className='mt-2'>Email</span> <br />
            <input type="email" placeholder='Enter Your Email here...' className='border rounded-md px-3 w-70 mt-1 py-1' {...register("email", { required: true })}/>
            {errors.email && <span className='text-red-800'>*This field is required</span>}
            <br />
            <span className='mt-2'>Password</span>
            <br />
            <input type="password" placeholder='Enter Your Password here...' className='border rounded-md  px-3 w-70 mt-1 py-1' {...register("password", { required: true })} />
            {errors.password && <span className='text-red-800'>*This field is required</span>}
    
        </div>
        <div className='flex mt-4 justify-around'>
        <button className='bg-pink-600 rounded-md w-20 hover:bg-pink-800'>SignUp</button>
           <p> HaveAnAccount? <button  className='underline text-blue-700 cursor-pointer'
           onClick={() => document.getElementById("my_modal_3").showModal()}>LogIn</button>{" "} <Login/></p> 
           
        </div>
        </form>
      </div>
      
    </div>
    </div>
        </>
  )
}

export default Signup