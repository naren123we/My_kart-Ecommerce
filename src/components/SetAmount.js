import React from 'react'
import { IoIosAdd } from 'react-icons/io';
import { HiMinus } from 'react-icons/hi';

const SetAmount = ({amount,Inc,Dec}) => {
  return (
    <div className='mt-3 px-2 pb-[3px] bg-slate-100 inline-block rounded-xl'>
      <span className='font-bold text-2xl inline-block mr-1' onClick={Dec}><HiMinus  className='inline-block cursor-pointer'/>
      </span>{amount}
      <span className='font-bold text-2xl inline-block ml-1' onClick={Inc}><IoIosAdd className='inline-block cursor-pointer'/></span>
    </div>
  )
}
 
export default SetAmount
