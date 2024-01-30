import {useState,useEffect} from "react"
import { useParams,useNavigate } from "react-router-dom"
import FormatPrice from "../components/FormatPrice";
import { FaStar } from 'react-icons/fa';
import SetAmount from "../components/SetAmount";

//spinner
import spinner from '../images/Fading line.gif'
import Showcolor from "../components/Showcolor";
//context
import {useContext} from 'react'
import { CartContext } from "../context/cart_context"
import { UserContext } from "../context/user_context";


const Singelproduct2 = () => {
    const {id} =useParams()
    const navigate=useNavigate()
    const[color,setcolor]=useState('')
    const [singleSaman,setsingleSaman]=useState('')
    const [isSingleLoading,setsinleLoading]=useState(true)
    const [error ,seterror]=useState(false)
    const [imgurl,setimgurl] =useState('')
    const [amount,setamount] =useState(1)
    const {addToCart}=useContext(CartContext)
    const {user}=useContext(UserContext);
    


    function colorsetting(color){
      setcolor(color)
    }


    const getSingleProduct = async (id) => {
           console.log(id,"id hai hye");

        try {
          const res = await fetch(`https://my-kart-server.vercel.app/api/v1/getsingleproduct/${id}`);
          const singleProduct = await res.json();
         
          setsingleSaman(singleProduct?.data)
          console.log(singleProduct?.data);
        
          setimgurl(singleProduct?.data.image[0])
          setcolor(singleProduct?.data.colors[0])
          setsinleLoading(false)
          } catch (error) {
             seterror(error.message)
             setsinleLoading(false)
             console.log(error)
       }
      };
 useEffect(()=>{
    getSingleProduct(id)
  
 },[id])




 



  function Inc(){
    amount>=singleSaman.stock?setamount(amount):setamount(amount+1)
}
function Dec(){
    amount>1?setamount(amount-1):setamount(amount)
}

 if(isSingleLoading){
    return ( <div className=" flex justify-center items-center 2xl:h-[63vh] lg:min-h-[53vh] md:h-[45vh] h-[66vh]">
    <img src={spinner} className='h-[110px] w-[110px]   '  alt='spinner' />
   </div>)
}
if(error){
  return <p  className=' my-16  text-2xl font-semibold text-center '>{error}</p>
}

  return (
    <div className="my-6 md:my-12 sm:p-8 p-5 flex flex-col md:flex-row md:space-x-8 md:space-y-0 space-y-5 justify-center">
    <div className="flex flex-row items-center space-x-6 justify-center">
         <div className="flex flex-col space-y-3">
             {singleSaman.image.map((url,index)=>{
              return(
                <img src={url} key={index} className='sm:h-[90px] h-[60px] sm:w-[140px] w-[100px]  hover:border-2 cursor-pointer border-slate-500' alt='product-img'onMouseOver={()=>{
                  setimgurl(url)
                 }}  />
                  )})}
          </div>
          
        <div id='full-img'>
            <img src={imgurl} className='sm:h-[190px] h-[150px] w-[220px]  sm:w-[280px] '  alt='product-img'/>
            </div> 
    </div>

  <div className="" id='product-detail'>
       <h1 className="font-semibold md:text-3xl text-2xl">{singleSaman.name}</h1>
         <span  className="px-2 py-1 bg-nav rounded-xl mt-3 inline-block">{singleSaman.stars} <FaStar className="inline-block mb-1" /></span>
         <span className="mx-1">{singleSaman.reviews} reviews</span>
         <p className="mt-3 font-semibold"><FormatPrice price={singleSaman.price}/></p>
         <p className=" md:max-w-[400px] mt-5">{singleSaman.description}</p>
         <hr className="mt-5"></hr>
         <p className="mt-2"><span className="font-semibold ">Avaliable:</span> {singleSaman.stock} in stock</p>
         <p className=""><span className="font-semibold ">Company:</span> {singleSaman.company}</p>
         <p className="mt-2"><span className="font-semibold ">Color:</span> <Showcolor singleSaman={singleSaman} colorsetting={colorsetting} /></p>
        <SetAmount amount={amount} Inc={Inc} Dec={Dec}/>
        <button  className="bg-nav px-[6px] py-1 rounded-lg ml-4 disabled:opacity-60 hover:text-black active:scale-105" disabled={!user} onClick={()=>{
          addToCart(id,color,amount,singleSaman)
        
 
          navigate('/my_cart')
        }}>Add To Cart</button>
  </div>
</div>
)
  
}

export default Singelproduct2
