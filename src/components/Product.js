
import FormatPrice from './FormatPrice'
import { AiOutlineLeft,AiOutlineRight} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
const Product = ({elm,lefthandel,righthandel}) => {
     
  console.log(elm)
 
  return (
    // <div className={`flex flex-col w-[100vw] sm:w-[30%] md:w-[25%] m-10px h-[auto] hover:shadow-lg bg-white px-2 pt-2  cursor-pointer relative  rounded-xl`}  id='product-card'>
      //      <AiOutlineLeft   className='absolute text-5xl sm:hidden  text-white font-bold left-3  bottom-[32vw]' onClick={lefthandel}/>
     
      // <AiOutlineRight  className='absolute text-5xl sm:hidden text-white  font-bold   right-3     bottom-[32vw]' onClick={righthandel} />
         
    //  <NavLink   to={`/${elm._id} singel`}> <img src={elm.image[0]} className=' w-[100%] max-h-[350px]' alt='product-img'/></NavLink>
    //   <div className='flex justify-between font-semibold px-1'>
    //   <p >{elm.name}</p>
    //   <p>{<FormatPrice price={elm.price}/>}</p>
    //   </div>
    // </div>
    
    <div className='flex flex-col w-[100vw] sm:w-[30%] md:w-[25%] p-1 xl:m-5 sm:m-2 m-1 relative  hover:shadow-lg'>
       <AiOutlineLeft   className='absolute text-5xl sm:hidden  text-white font-bold left-3  bottom-[31vw] ' onClick={lefthandel}/>
      <AiOutlineRight  className='absolute text-5xl sm:hidden  text-white  font-bold   right-3  z-[100]   bottom-[31vw]' onClick={righthandel} />
  <NavLink to={`/${elm._id} singel`}> <img src={elm.image[0]} alt="product-img" className='lg:h-[250px] sm:h-[150px] h-[200px] w-[100%] '/></NavLink> 
    <div className='flex justify-between px-1'>
    <span>{elm.name}</span>
    <span><FormatPrice price={elm.price} alt='product-img'/></span>
    </div>
  </div>


  )
}

export default Product
