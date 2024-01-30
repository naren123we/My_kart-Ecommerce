import React from 'react'

const Userprofile = ({user,signout,cartReset}) => {
  return (
    
     <div className='px-5 py-[87px] flex flex-col items-center font-mono'>
     
       <h1 className='sm:text-xl text-base font-semibold '>Welcome {user.name.split(' ')[0]}</h1>
       <div>
       <div className='flex flex-row space-x-2 sm:text-lg text-sm '>
        <p>Name :</p>
        <p>{user.name}</p>
        </div>
       <div className='flex flex-row space-x-2 sm:text-lg text-sm pt-5'>
        <p>email:</p>
        <p>{user.email}</p>
       </div>
       </div>
        <button className='px-2 py-1 bg-blue-500 mt-4 w-[250px] rounded-sm text-lg text-white active:scale-105 hover:text-black' onClick={()=>{
          signout();
          cartReset();
        }}>Log out</button>

    </div>
  )
}  

export default Userprofile
