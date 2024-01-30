import {useContext,useState} from 'react'
import { CartContext } from "../context/cart_context"
import FormatPrice from '../components/FormatPrice'
import { AiFillDelete } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

//component
import Cartcard from '../components/Cartcard';
import Ordering from '../components/Ordering';

const MyCart = () => {

  const {cart,removeItem,total_amount,shipping_fee }=useContext(CartContext)
  const[popup,setpopup]=useState('')

  function set(){
    setpopup(`you can't order now`)
    setTimeout(()=>{
       setpopup('')
    },3000)
  }

 
  

  return (
    
  <>
  {cart && cart.length!==0 ?<div>
     <h1 className='text-center font-mono mt-4  text-blue-500 sm:text-lg'>{popup}</h1>

    <div className='sm:my-10 my-4 p-5'>
     
    <div  className=' sm:flex hidden flex-row md:justify-center justify-between md:space-x-14'>
      <div className='flex flex-col space-y-5'>
      <h1 className='text-lg font-semibold'>ITems</h1>
         {cart.map((itm,i)=>{
        return(
          
            <div className='flex flex-row   items-center space-x-1 ' key={i}>
             <img src={itm.image} className='w-[75px] h-[50px]' alt='product_img'></img>
            <span> <p>{itm.name}</p> <p className='relative'>color : <button style={{backgroundColor:itm.color}} className='absolute inline-block p-[9px] top-[5px] ml-1 rounded-full'></button></p></span>
             </div>
        )
      })}
      </div>
 
 
      <div className='flex flex-col space-y-6'>
      <h1 className='text-lg font-semibold'>Price</h1>
         {cart.map((itm,i)=>{
        return(
        <p key={i} className='h-[50px]'><FormatPrice price={itm.price}/></p>
        )
      })}
      </div>
      <div className='flex flex-col space-y-6'>
      <h1 className='text-lg font-semibold'>Quantity</h1>
         {cart.map((itm,i)=>{
        return(
        <p key={i} className='h-[50px]'>{itm.amount} items</p>
        )
      })}
      </div>
      <div className='flex flex-col space-y-6'>
      <h1 className='text-lg font-semibold'>Subtotal</h1>
         {cart.map((itm,i)=>{
        return(
        <p key={i} className='h-[50px]'><FormatPrice price={itm.price*itm.amount}/></p>
        )
      })}
      </div>
      <div className='flex flex-col space-y-6 items-center'>
      <h1 className='text-lg font-semibold'>Remove_item</h1>
         {cart.map((itm,i)=>{
        return(
     <p  key={i} className='h-[50px]'><AiFillDelete  className='text-xl hover:scale-105 cursor-pointer'onClick={()=>{removeItem(itm.id)}}/></p>
        )
      })}
      </div>
   
    </div>




    <div className='flex sm:hidden flex-col  items-center'>
      {cart.map((elm,i)=>{
        return <Cartcard key={i} elm={elm} removeItem={removeItem}/>
      })}
    
    </div>
    
    <hr className='sm:mt-10 mt-3 lg:w-[80vw]  w-[90%] mx-auto'></hr>
      <div className='mt-5 sm:mt-10'>
      <Ordering total_amount={total_amount} shipping_fee={shipping_fee} set={set}/>
      </div>
       
    </div>
    </div>:  <div className='justify-center items-center flex flex-col min-h-[50vh] sm:my-8 my-4 font-semibold'>
    <img src='https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90'className='w-[200px] md:w-[300px]' alt='com-img' />
  <h1>Your cart is empty !</h1>
  <p className='text-sm'>Add items it now.</p>
 <NavLink to='/product'> <button className='bg-nav  px-10 sm:px-14 py-1 rounded-lg mt-2 mr-2 hover:text-black'>Shop Now</button></NavLink>
  </div>}
  </> 
  )
    }

export default MyCart
