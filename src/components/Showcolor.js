import {useState} from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
const Showcolor = ({singleSaman,colorsetting}) => {
const [id,setid]=useState(0)

  return (
    <>
       {singleSaman.colors.map((clr,index)=>{
     
         return( 
            
            <span style={{backgroundColor:singleSaman.colors[index]}} onClick={()=>{
               colorsetting(singleSaman.colors[index])
               setid(index)
            }} className={`w-[24px] h-[24px] mr-3 -mb-[7px] inline-block rounded-full cursor-pointer `} key={index}>{id===index&& <AiOutlineCheck className='text-yellow-100 mt-[3px] ml-[2px]'/>}</span>
         
            
            )
           
       })}
    </>
  )
}

export default Showcolor
