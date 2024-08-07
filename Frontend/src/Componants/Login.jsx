import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
  
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
      
    <h3 className="font-bold text-lg">LogIn</h3>
    <div className='mt-4'>
        <span className='mt-2'>Email</span> <br />
        <input type="email" placeholder='Enter Your Email here...' className='border rounded-md px-3 w-70 mt-1 py-1' {...register("email", { required: true })} />
         {errors.email && <span className='text-red-800'>*This field is required</span>}
        <br />
        
        <span className='mt-2'>Password</span>
        <br />
        <input type="password"
          placeholder='Enter Your Password here...'
          className='border rounded-md  px-3 w-70 mt-1 py-1' 
          {...register("password", { required: true })}
          
          />
          {errors.password && <span className='text-red-800'>*This field is required</span>}

    </div>
    <div className='flex mt-4 justify-around'>
    <button className='bg-pink-600 rounded-md w-20 hover:bg-pink-800'>Login</button>
    <p> NotRegistered? <Link to="/signup" className='underline text-blue-700 cursor-pointer'>Signup</Link></p> 
    
    </div>
    </form>
  </div>
</dialog>
    </>
  )
}

export default Login