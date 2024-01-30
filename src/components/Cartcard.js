import { AiFillDelete } from 'react-icons/ai';
import FormatPrice from './FormatPrice'

const Cartcard = ({elm,removeItem}) => {


  console.log(elm,"cartelm");
  return (
    <div className='flex flex-col my-3 p-3 w-[94%] font-medium max-w-[420px] space-y-3 hover:shadow-lg border-slate-500 rounded-md border-2'>
    
    <div className='flex flex-row justify-between  '>
        <div className='flex flex-row'>
             <img src={elm.image} className='w-[75px] h-[50px] ' alt='product_img'></img>
            <span className='inline-block ml-[6px]'> <p>{elm.name}</p> <p className='relative'>color : <button style={{backgroundColor:elm.color}} className='absolute inline-block p-[9px] top-[5px] ml-1 rounded-full'></button></p></span>
            </div>
             <p className=''><FormatPrice price={elm.price}/></p>
          </div>
       
        <div className=' flex flex-row justify-between'>
         <span>Quantity : {elm.amount}</span> <span>Subtotal: <FormatPrice price={elm.price*elm.amount} /></span>
         </div>
         <p>Remove_item <AiFillDelete className='text-xl hover:scale-105 cursor-pointer inline-block' onClick={()=>{removeItem(elm.id)}}/></p>
    </div>
  )
}

export default Cartcard
