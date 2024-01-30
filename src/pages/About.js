import about from '../images/About.jpg'
import Testimonial from '../components/Testimonial'
import Trusted from '../components/Trusted'
const About = () => {
  return (
    <div>

      <Testimonial />

      <div className="bg-slate-50  flex lg:flex-row  flex-col-reverse  justify-center md:space-x-4 lg:space-x-10 md:m-6 my-4 md:p-5 p-3 md:rounded-2xl  items-center">
        <img src={about} className=" lg:w-[42%] max-h-[400px] lg:max-h-[350px] w-[100%] mt-5  lg:mt-0 " alt='img' />
        <div className='lg:max-w-[650px]'>
          <h1 className='sm:text-4xl text-2xl font-bold font-serif mb-4'>Wellcome to My_Kart !!</h1>
          <p className='md:text-lg '> your one-stop-shop for all your shopping needs. We are a
            leading online e-commerce platform dedicated to providing an unparalleled shopping
            experience to customers worldwide. Our extensive range of products, including free delivery and discounts, is sourced from trusted suppliers to ensure high-quality and authenticity.
            With our user-friendly interface and secure payment options, shopping on our platform is easy
            and safe. Our customer support team is always available to assist with any questions or concerns,
            ensuring a seamless shopping experience.</p>
            <p className='md:text-lg'> Join the millions of satisfied customers who trust us for their shopping needs. Shop with us today
            and experience the difference.</p>
        </div>
      </div> 

      <Trusted />
    </div>
  )
}

export default About
