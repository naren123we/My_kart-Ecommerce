import {useState,useContext} from 'react'
import {GoLocation} from 'react-icons/go';
import {BsClock} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user_context';

const Contact = () => {
  
  const [show1,setshow1]=useState(null);
  const {token}=useContext(UserContext);
  const [formData,setformData]=useState({
    name:'',
    email:'',
    message:''
  })
  const navigate=useNavigate()
  function getdata(e){
const name=e.target.name;
 const value=e.target.value;
 setformData({...formData,[name]:value})

  }

const set=async(e)=>{
  e.preventDefault()
const {name,email,message}=formData;
  const res=await fetch('https://my-kart-server.vercel.app/api/v1/contactus',
  { method:'POST',
  headers:{
    'Content-Type':"application/json",
    'Authorization': `Bearer ${token} `,
},
body:JSON.stringify({
 name,
 email,
 message,
token,
})
})
const data=await res.json();
   if(data.success){
     setshow1(data.message);
     setTimeout(()=>{
      navigate('/')
    },3000)
   }else{
    setshow1("Message is not sent..please login and try again");
   }



}
  return (
    <>
    <h1 className={`pt-4 font-semibold text-lg md:text-2xl text-blue-500   text-center ${!show1 &&'hidden'} `}>{show1} !!</h1>
    <div className='flex justify-center my-8 md:flex-row flex-col md:space-x-6 items-center space-y-8 md:space-y-0'>
      
      <form onSubmit={set} method='POST' className=' inline-block bg-slate-50 p-2 md:p-4 rounded-xl md:h-[328px] '>
        <div className='mb-5'>
           <h1 className='md:text-3xl text-2xl font-bold sm:mx-2  '>contact us</h1>
           <p className='sm:mx-2 mb-5'>Fill out the form for contact with our team </p>
           </div>
           <label className='block mt-2 md:mt-[33px]'>
           <span className='sm:text-lg text-base font-semibold'>Your Name : </span>
           <input type='text' name='name' value={formData.name} onChange={getdata} required className='px-2 py-[2px] border-2 sm:w-[260px] w-[180px] rounded-lg sm:ml-[23px] ml-[17px]'/>
           </label>

           <label className='block mt-2 '>
           <span className='sm:text-lg text-base font-semibold'>Your Email : </span>
           <input type='email' name='email' value={formData.email} onChange={getdata} required className='px-2 py-[2px] border-2 sm:w-[260px] w-[180px] rounded-lg sm:ml-[26px] ml-[20px]'/>
           </label>

           <label className='flex items-center mt-2'>
           <span className='sm:text-lg text-base font-semibold'>Your Message :  </span>
           <textarea type='text' name='message' value={formData.message} onChange={getdata} required className='px-2 py-[2px] border-2 sm:w-[260px] w-[180px] rounded-lg sm:ml-[4px] ml-[3px] ' rows='2' />
              </label>
             
           <button className='m-2  md:mt-[10px] px-2 py-1 bg-nav rounded-lg active:scale-105 hover:text-black' 
          >submit</button>
      </form>
      <div className='flex md:flex-col flex-col sm:flex-row space-x-0 sm:space-x-5 md:space-x-0 sm:space-y-0  md:space-y-6 space-y-6'>
        <div className='px-5 py-7 bg-slate-50 rounded-xl w-[310px]  text-lg'>
           <h1 className='text-xl font-semibold mb-3'> <GoLocation className='inline-block'/>    Address</h1>
           <p>2/373 B Nawabganj Kanpur </p>
           <p>Uttar Pradesh, India</p>
        </div>

        <div className='px-5 py-7 bg-slate-50 rounded-xl w-[310px] text-lg'>
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


