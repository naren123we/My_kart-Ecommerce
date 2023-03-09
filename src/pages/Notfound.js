import React from 'react'
import { NavLink } from 'react-router-dom'
const Notfound = () => {
  return (
    <div className=' text-center sm:p-24 p-16 '>
       <h1 className='sm:text-3xl text-2xl font-bold'>404 Error</h1>
        <p className='text-xl font-semibold'>This page doesn't exist !!</p>
        <NavLink to='/'><p  className='text-xl font-semibold cursor-pointer hover:text-slate-700'>Go back To Home</p></NavLink>
    </div>
  )
}

export default Notfound
 