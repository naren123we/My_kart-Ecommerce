import { HiOutlineShoppingCart } from 'react-icons/hi';
import { AiOutlineMenu,AiFillHome,AiFillContacts,AiFillAppstore,AiOutlineLogin } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { BsFillCartFill } from 'react-icons/bs';
import { FaWindowRestore } from 'react-icons/fa';
import { useState,useContext } from 'react';
import { NavLink} from 'react-router-dom'; 
import { FillterContext } from "../context/filter_context"
//for cart

import { CartContext } from "../context/cart_context"
import { UserContext } from '../context/user_context';

const Navbar = () => {
 
  const [mobile_menu,setmobile_menu] =useState(true)
  const {Toggle}=useContext(FillterContext)
  const {total_item}=useContext(CartContext)
  const {user,token}=useContext(UserContext);
      
  
  
 
  
  return (
    <nav className='bg-nav   shadow-lg relative ' id="nav-top" >
     <div className="h-[9vh] stick  sm:h-[11vh] text-white flex  justify-between items-center  lg:px-12 px-7 ">
     <h1 className='font  font-bold text-[1.75rem] lg:text-4xl'>My_Kart</h1>
     <ul className={`md:flex  hidden lg:space-x-14 space-x-9 items-center justfy-between `}>
       
    <li  className=' font-semibold  hover:text-slate-200 cursor-pointer text-xl'><NavLink to='/'>Home</NavLink></li>
    <li  className=' font-semibold  hover:text-slate-200 cursor-pointer text-xl'><NavLink to='product' onClick={Toggle}>Products</NavLink></li>
    <li  className=' font-semibold  hover:text-slate-200 cursor-pointer text-xl'><NavLink to='contact'>Contact </NavLink></li>
    <li  className=' font-semibold  hover:text-slate-200 cursor-pointer text-xl'><NavLink to='about'>About</NavLink></li>
   {user ?<NavLink to='user'><li><img alt="profile_picture" className='h-[50px] rounded-[50%]' src={user.image}></img> </li></NavLink>:<li  className=' font-semibold px-1 bg-white text-blue-500 rounded-md py-[2px] mt-[2px] hover:text-slate-400 cursor-pointer text-xl'><NavLink to='user'>Login</NavLink></li>}
    <li className='relative cursor-pointer'><NavLink to='my_Cart'> <HiOutlineShoppingCart size='30px'/></NavLink><span className=' absolute left-[28px] -top-3' >{total_item}</span></li>
        </ul>

     <span className='md:hidden inline-block' onClick={()=>{setmobile_menu(!mobile_menu)}}>
       {mobile_menu ?< AiOutlineMenu  size='40px'/> : < RxCross2  size='40px'  />}
        </span>
     </div>

      <div className={`${mobile_menu?'-translate-x-[400px]':' translate-x-0 '}
       top-0 z-10  animation-ul  w-[50vw] shadow-2xl h-[100vh] md:hidden
        bg-white text-black absolute `}>
            <p className='h-[9vh] w-[100%] bg-nav '><span className='text-2xl mt-2 ml-2 inline-block text-white'>My_Kart</span></p>
     <ul className={`flex flex-col mt-5 mb-3 space-y-4`}>
       
    

    {user? <NavLink to='user'><img alt="profile_picture" className='h-[50px] mx-[15px] rounded-[50%]' src={user.image}></img></NavLink> :<li  className='flex my-6 font-semibold px-3 sm:px-5 pt-2  hover:text-slate-400 cursor-pointer text-xl'><AiOutlineLogin className=' mx-[4px] mt-[3px]'/><NavLink to='user'>Login</NavLink></li>}
     <hr></hr>
       <li  className='flex  font-semibold px-3 sm:px-5  hover:text-slate-400 cursor-pointer text-xl'><AiFillHome className=' mx-[4px] mt-[3px]'/><NavLink to='/'>Home</NavLink></li>
       <hr></hr>
       <li  className='flex font-semibold px-3 sm:px-5  hover:text-slate-400 cursor-pointer text-xl'><AiFillAppstore className=' mx-[4px] mt-[3px]'/><NavLink to='product'>Products</NavLink></li>
       <hr></hr>
       <li  className='flex font-semibold px-3 sm:px-5  hover:text-slate-400 cursor-pointer text-xl'><AiFillContacts className=' mx-[4px] mt-[3px]'/><NavLink to='contact'>Contact </NavLink></li>
       <hr></hr>
       <li  className='flex font-semibold px-3 sm:px-5  hover:text-slate-400 cursor-pointer text-xl'><FaWindowRestore className=' mx-[4px] mt-[3px]'/><NavLink to='about'>About</NavLink></li>
       <hr></hr>
       <li className='flex font-semibold px-3 sm:px-5 hover:text-slate-400 cursor-pointer text-xl'> <BsFillCartFill className=' mx-[4px] mt-[3px]'/><NavLink to='my_cart'>My_Kart</NavLink> </li>
           </ul>
           </div>

    </nav>
  )
}

export default Navbar