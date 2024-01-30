import React from 'react'
import {FaFacebookSquare,FaTwitterSquare,FaInstagram} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import {BsFillArrowUpSquareFill} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='flex flex-col  sm:text-lg text-sm  w-[100%] relative   bg-slate-900 text-white py-5 px-3 sm:p-8 '>
      <div className='flex  flex-row  justify-around '>
           <div id="info" className='hidden sm:block mr-5'>
             <h1>My_Kart</h1>
             <p className='mt-3'>Top brands for products</p>
             <p>Latest trends in faishon</p>
           </div>

           <div id="connect" className='mr-5'>
            <h1>Connect with us</h1>
           <div className='flex flex-row space-x-2  justify-center sm:mt-3 mt-2 sm:text-2xl text-lg '>
      <FaFacebookSquare className='hover:scale-110 cursor-pointer ' />
      <FaTwitterSquare  className='hover:scale-110  cursor-pointer' />
      <FaInstagram  className='hover:scale-110 cursor-pointer' />
     < SiGmail  className='hover:scale-110 cursor-pointer' />
      </div>

           </div>
         <div id='contect'>
           <h1>Contact with us</h1>
             <p className='sm:mt-3 mt-2'>Phone no. : +9163456789</p>
             <p>Email : my_kart@gmail.com</p>
         </div>
      </div>
      <hr className='sm:my-8 my-4'></hr>
      <div className='text-center '>
        <h3>© Copyright My_Kart. All Rights Reserved</h3>
    
   
      
      </div>
    </div>
  )
}

export default Footer