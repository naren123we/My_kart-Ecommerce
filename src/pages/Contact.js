import {useState} from 'react'
import {GoLocation} from 'react-icons/go';
import {BsClock} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  
  const [show1,setshow1]=useState(true)
  const navigate=useNavigate()
function set(e){
  e.preventDefault()
  setshow1(false)
  setTimeout(()=>{
    navigate('/')
  },1000)

}
  return (
    <>
    <h1 className={`pt-4 font-semibold text-lg md:text-2xl   text-center ${show1 &&'hidden'} `}>Thanks for contact with us !!</h1>
    <div className='flex justify-center my-8 md:flex-row flex-col md:space-x-6 items-center space-y-8 md:space-y-0'>
      
      <form onSubmit={set} className=' inline-block bg-slate-50 p-2 md:p-4 rounded-xl md:h-[328px] '>
        <div className='mb-5'>
           <h1 className='md:text-3xl text-2xl font-bold mx-2  '>contact us</h1>
           <p className='mx-2 mb-5'>Fill out the form for contact with our team </p>
           </div>
           <label className='block m-2 md:mt-[33px]'>
           <span className='text-lg font-semibold'>Your Name : </span>
           <input type='text' name='your name'  required className='px-2 py-[2px] border-2 sm:w-[260px] w-[200px] rounded-lg ml-[23px]'/>
           </label>

           <label className='block m-2 '>
           <span className='text-lg font-semibold'>Your Email : </span>
           <input type='email' name='email'  required className='px-2 py-[2px] border-2 sm:w-[260px] w-[200px] rounded-lg ml-[26px]'/>
           </label>

           <label className='flex items-center m-2'>
           <span className='text-lg font-semibold'>Your Message :  </span>
           <textarea type='text' name='message'  required className='px-2 py-[2px] border-2 sm:w-[260px] w-[200px] rounded-lg ml-[4px] ' rows='2' />
              </label>
             
           <button className='m-2  md:mt-[10px] px-2 py-1 bg-nav rounded-lg active:scale-105 hover:text-black' 
          >submit</button>
      </form>
      <div className='flex md:flex-col flex-col sm:flex-row space-x-0 sm:space-x-5 md:space-x-0 sm:space-y-0  md:space-y-6 space-y-6'>
        <div className='px-5 py-7 bg-slate-50 rounded-xl sm:w-[300px] w-[359px] text-lg'>
           <h1 className='text-xl font-semibold mb-3'> <GoLocation className='inline-block'/>    Address</h1>
           <p>2/373 B Nawabganj Kanpur </p>
           <p>Uttar Pradesh, India</p>
        </div>

        <div className='px-5 py-7 bg-slate-50 rounded-xl sm:w-[300px] w-[359px] text-lg'>
           <h1 className='text-xl font-semibold mb-3'> <BsClock className='inline-block'/>    Open Hours</h1>
           <p>Everyday </p>
           <p>24 Hours</p>
        </div>

      </div>
    </div>
    </>
  )
}

export default Contact


