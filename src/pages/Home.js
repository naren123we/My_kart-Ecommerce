import { AppContext } from "../context/Productcontext";
import { useContext, useState } from "react";

//images
import spinner from "../images/Fading line.gif";
//components
import Trusted from "../components/Trusted";
import Product from "../components/Product";
import Testimonial from "../components/Testimonial";

const Home = () => {
  const products = useContext(AppContext);

  const [index, setindex] = useState(0);
  function lefthandel() {
    index === 0 ? setindex(2) : setindex(index - 1);
  }
  function righthandel() {
    index === 2 ? setindex(0) : setindex(index + 1);
  }
  if (products.loading) {
    return (
      <div className=" flex justify-center items-center 2xl:h-[63vh] lg:min-h-[53vh] md:h-[45vh] h-[66vh]">
        <img src={spinner} className="h-[110px] w-[110px]   " alt="spinner" />
      </div>
    );
  }
  if (products.error) {
    return (
      <p className="mt-16 text-center font-semibold text-2xl">
        {products.error}
      </p>
    );
  }

  return (
    <>
      <div className="  py-6   bg-slate-50 overflow-hidden">
        <h1 className="font-bold md:text-3xl text-2xl mb-4  font-serif mx-3 md:mx-[8vw] ">
          In Trending
        </h1>
        <div
          className="flex flex-row   justify-around sm:justify-center sm:space-x-5  w-[300vw] sm:w-[100vw]  animation-ul "
          style={{ transform: `translateX(${index * -100}vw)` }}
        >
          {products.trending.map((elm, index) => {
            return (
              <Product
                key={elm._id}
                elm={elm}
                righthandel={righthandel}
                lefthandel={lefthandel}
              />
            );
          })}
        </div>
      </div>

      <Testimonial />
      <Trusted />
    </>
  );
};

export default Home;
