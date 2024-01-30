
import FormatPrice from './FormatPrice'
const Product2 = ({elm}) => {
   
  return (
    <div className='flex flex-col lg:w-[240px] sm:w-[190px] w-[300px] p-1 xl:m-5 sm:m-2 m-1   hover:shadow-lg'>
      <img src={elm.image[0]} alt="product-img" className='lg:h-[180px] sm:h-[130px] h-[200px] '/>
      <div className='flex justify-between px-1'>
      <span>{elm.name}</span>
      <span><FormatPrice price={elm.price} alt='product-img'/></span>
      </div>
    </div>
  )
}

export default Product2
