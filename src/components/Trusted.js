import {FaPaypal,FaCcVisa,FaCcAmazonPay,FaAlipay,FaGratipay} from 'react-icons/fa';

const Trusted = () => {
  return (
    <div className="bg-slate-50 md:m-6 my-4 p-3 md:rounded-2xl">
    <h1 className="text-center text-lg font-medium px-2 pb-2">Trusted by 1000+ companies</h1>
    <div className="flex flex-wrap md:justify-center justify-around md:space-x-16 sm:text-5xl text-3xl ">
     <FaPaypal  />
    <FaCcVisa />
    <FaCcAmazonPay />
    <FaAlipay />
    <FaGratipay  />
    </div>
</div>
  )
}

export default Trusted
