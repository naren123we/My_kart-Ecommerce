
import FormatPrice from './FormatPrice'
const Ordering = ({total_amount,shipping_fee,set}) => {
  return (
    <div className='flex flex-col space-y-2 bg-slate-200 w-[94%]  max-w-[420px] p-3 rounded-lg mx-auto  sm:ml-auto border-2 border-slate-500'>
    <div className='flex flex-row justify-between'> <h1>Subtotal:</h1><p className=''><FormatPrice price={total_amount}/></p></div>
    <div className='flex flex-row justify-between'> <h1>Delivery Charge:</h1> <p className=''><FormatPrice price={shipping_fee}/></p></div>
     <hr className=' bg-black h-[2px]'></hr>
     <div className='flex flex-row justify-between'><h1>Total Amount:</h1><p className=''><FormatPrice price={total_amount+shipping_fee}/></p>  </div>
     <button className='bg-nav  px-14 py-1 rounded-lg mt-2  hover:text-black' onClick={set}>Order Now</button>
     </div>
  )
}
 
export default Ordering
