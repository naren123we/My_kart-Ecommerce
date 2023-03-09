import { FillterContext } from "../context/filter_context"
import { AppContext } from "../context/Productcontext"
import { useContext } from "react"
import { NavLink } from "react-router-dom"

//images
import spinner from '../images/Fading line.gif'

//comonents
import Product2 from "../components/Product2"
import Search from "../components/Search"
const Products = () => {
  const { filterProduct, sort, AllProduct,search } = useContext(FillterContext)
  const products = useContext(AppContext)


  function getfiltertype(arr, type) {
    let catogery = arr.map((elm) => {
      return elm[type]
    })
    catogery = ['All', ...new Set(catogery)]
    return catogery
  }
  const catogery = getfiltertype(AllProduct, 'category')



  if (products.loading) {
    return <img src={spinner} className='h-[110px] w-[110px] mx-auto my-14' alt='spinner' />
  }
  return (

    <div className=' flex  sm:flex-row flex-col  sm:my-10 sm:justify-center px-3 sm:px-8'>

        <Search catogery={catogery} sort={sort} search={search}/>
       
      <div className="flex flex-wrap justify-center md:w-[80%] w-[100%] ">
        { filterProduct.length!==0?filterProduct.map((elm, index) => {
          return (
            <NavLink to={`/${elm.id} singel`} key={elm.id}><Product2 elm={elm} key={index} /></NavLink>
          )
        }) :
        <div>
        <img src='https://media.tenor.com/unvXyxtdn3oAAAAC/no-result.gif'  alt='result-img'  className="w-[100%]"/>
       
        </div>}
      </div>

    </div>
  )
}

export default Products
