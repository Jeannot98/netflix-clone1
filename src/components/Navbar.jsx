import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='flex items-center justify-between w-full p-4 z-[100] absolute'>
        <h1 onClick={()=> navigate('/')} className='text-red-500 text-4xl  font-bold cursor-pointer'>NETFLIX</h1>

        <div>
            <button className='text-white pr-4'>Sign In</button>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer
            text-white'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar