
import FormatPrice from './FormatPrice'
import { AiOutlineLeft,AiOutlineRight} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
const Product = ({elm,lefthandel,righthandel}) => {
     
 
  return (
    <div className={`flex flex-col w-[100vw] sm:w-[30%] md:w-[25%] m-10px h-[auto] hover:shadow-lg bg-white px-2 pt-2  cursor-pointer relative  rounded-xl`}  id='product-card'>
           <AiOutlineLeft   className='absolute text-3xl sm:hidden  text-white font-bold left-4  bottom-[32vw]' onClick={lefthandel}/>
     
      <AiOutlineRight  className='absolute text-3xl sm:hidden text-white  font-bold   right-4     bottom-[32vw]' onClick={righthandel} />
         
     <NavLink   to={`/${elm.id} singel`}> <img src={elm.image} className=' w-[100%] max-h-[350px]' alt='product-img'/></NavLink>
      <div className='flex justify-between font-semibold px-1'>
      <p >{elm.name}</p>
      <p>{<FormatPrice price={elm.price}/>}</p>
      </div>
    </div>
  )
}

export default Product
