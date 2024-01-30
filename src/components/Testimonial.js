import cash from '../images/cash-on-delivery.png'
import free from '../images/delivery.png'
import back from '../images/easy-return.png'


const Testimonial = () => {
  return (
    <div className="bg-slate-50  flex md:flex-row flex-col justify-center md:space-x-4 lg:space-x-10 md:m-6 my-4 md:p-5 p-3 md:rounded-2xl  items-center">
           <div className="flex flex-col sm:min-w-[370px] my-12 md:my-0">
         <span className="sm:text-4xl text-2xl sm:font-bold font-semibold font-serif"><span>Lowest Prices</span><br/><span> Best Quality Shopping</span></span>
         <div className="flex md:space-x-6 space-x-4 pt-3 text-sm">
         <div className="flex ">
          <img src={free} className='h-[45px] w-[45px] rounded-full bg-white p-1' alt="free-img"></img>
         <span><span>Fast</span><br/><span>Delivery</span></span>
         </div>
         <div className="flex">
         <img src={cash} className='h-[45px] w-[45px] rounded-full bg-white p-1' alt='cash-img'></img>
        <span><span>Cash on</span> <br/><span>Delivery</span></span> 
         </div>
         <div  className="flex">
         <img src={back} className='h-[45px] w-[45px] rounded-full bg-white p-1' alt='back-img'></img>
        <span><span>Secure</span><br/><span>return</span></span> 
         </div>
         </div>
       </div>
        
        <img src='https://images.herzindagi.info/image/2022/May/tips-to-save-money-while-shopping.jpg' className="md:w-[47%] lg:w-[40%] max-h-[300px] w-[100%]" alt='img'/>
         
    </div>
  )
}

export default Testimonial
