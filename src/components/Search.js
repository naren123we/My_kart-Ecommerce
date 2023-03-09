import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';



const Search = ({catogery,sort,search}) => {

  
const [inputvalue,setintput]=useState('')

  return (
    <div className="   sm:min-w-[185px] bg-white z-[1] justify-around sm:justify-start sticky top-[45px] sm:top-[118px] xl:top-[130px] xl:ml-10 flex flex-row sm:flex-col sm:space-y-5 h-[100%]  md:w-[20%] sm:px-2 sm:my-3 py-6 sm:py-0 sm:border-r-2 " >
    <div className="flex space-x-1">
   
   <input type='text' value={inputvalue}
    onChange={(e)=>{setintput(e.target.value)}}
    onKeyUp={(e)=>{
        if(e.key==='Enter'){
            search(inputvalue)
            setintput('')
        }
    }}
    placeholder="Search your item"  
    className="border-2 inline-block  border-slate-400 px-2 w-[170px] sm:w-[150px] xl:w-[180px] rounded-lg"
     ></input>
      <span className="w-20px mt-1 cursor-pointer  text-slate-400"
       onClick={()=>{search(inputvalue)
        setintput('')
    }}><FaSearch  size='20px' /></span>
     </div>
     
     <div id='catogery' className="text-left sm:flex hidden  flex-col ml-2 ">
       <h1 className="font-semibold text-lg mb-2 ">Categories</h1>
       {catogery.map((elm, i) => {
         return (
           
             <button className="cursor-pointer text-left  hover:text-gray-500 my-1" 
             value={elm} onClick={sort} key={i}>{elm}</button>
           
         )
       })}
     </div>

     <select name="catogery" id="catogery" onClick={sort}  className=' block sm:hidden cursor-pointer  rounded-lg' >
  {catogery.map((elm, i) =>{
      return ( 
        
         <option  key={i} value={elm}>{elm}</option>
        
      )

    })}

     </select>  


   </div>

  )
}

export default Search
