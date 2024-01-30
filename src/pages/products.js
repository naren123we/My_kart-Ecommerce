import { FillterContext } from "../context/filter_context";
import { AppContext } from "../context/Productcontext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

//images
import spinner from "../images/Fading line.gif";

//comonents
import Product2 from "../components/Product2";
import Search from "../components/Search";
const Products = () => {
  const { filterProduct, sort, AllProduct, search } =
    useContext(FillterContext);
  const products = useContext(AppContext);

  function getfiltertype(arr, type) {
    let catogery = arr.map((elm) => {
      return elm[type];
    });
    catogery = ["All", ...new Set(catogery)];

    return catogery;
  }
  const catogery = getfiltertype(AllProduct, "category");

  if (products.loading) {
    return (
      <div className=" flex justify-center items-center 2xl:h-[63vh] lg:min-h-[53vh] md:h-[45vh] h-[66vh]">
        <img src={spinner} className="h-[110px] w-[110px]   " alt="spinner" />
      </div>
    );
  }
  return (
    <div className=" flex  sm:flex-row flex-col  sm:my-10 sm:justify-center px-3 sm:px-8">
      <Search catogery={catogery} sort={sort} search={search} />

      <div className="flex flex-wrap justify-center md:w-[80%] w-[100%] ">
        {filterProduct.length !== 0 ? (
          filterProduct.map((elm, index) => {
            return (
              <NavLink to={`/${elm._id} singel`} key={elm._id}>
                <Product2 elm={elm} key={index} />
              </NavLink>
            );
          })
        ) : (
          <div>
            <img
              src="https://media.tenor.com/unvXyxtdn3oAAAAC/no-result.gif"
              alt="result-img"
              className="w-[100%]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
