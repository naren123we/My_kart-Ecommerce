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
    <main className='sm:min-h-[40vh] min-h-[55vh]'>
      <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default RootLayout