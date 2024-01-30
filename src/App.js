import { createBrowserRouter,  createRoutesFromElements,
  Route,  RouterProvider} from 'react-router-dom'
import './App.css';
//pages
import Home from './pages/Home';
import Product from './pages/products';
import About from './pages/About';
import Contact from './pages/Contact';
import Loginsigup from './pages/Login-sigup';
import MyCart from './pages/MyCart';

import Notfound from './pages/Notfound';
import Singelproduct2 from './pages/Singelproduct2';
//layouts
import RootLayout from './layouts/RootLayout';






const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      
      <Route path='/' element={<Home />} />
      
      <Route path=':id singel' element={ <Singelproduct2  />} />
      
     <Route path="product" element={<Product />} />
    
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="user" element={<Loginsigup />} />
      <Route path='my_cart' element={<MyCart/>} />
      <Route path="*" element={<Notfound />} />
      </Route>
  ))
function App() {
 
  return (
    <RouterProvider router={router} />
  );
}

export default App;
