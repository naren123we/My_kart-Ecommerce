import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const RootLayout = () => {
  return (
    <>
    <header>
     <Navbar />
     </header>
    <main className=' lg:min-h-[53vh] 2xl:min-h-[63vh] md:min-h-[45vh] min-h-[66vh] '>
      <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default RootLayout