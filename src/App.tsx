
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import AdminSignUp from './pages/AdminSignUp'
import AdminSignin from './pages/AdminSignin'
import CreateProduct from './pages/CreateProduct'
import {ProductCard} from './pages/ProductCard'
const App = () => {
  return (
    <div>
      <Navbar/>
  <div className='flex gap-2 p-4'>
      <ProductCard  imageUrl="https://plus.unsplash.com/premium_photo-1661311821491-e41a9799263d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  discountText="SUMMER SALE 60% OFF"
  buttonText="Shop Now"
  />

    <ProductCard  imageUrl="https://plus.unsplash.com/premium_photo-1683141440843-53f051bf4095?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
     buttonText = "explore more"
  discountText="SUMMER SALE 60% OFF" />


<ProductCard
  imageUrl="https://plus.unsplash.com/premium_photo-1683140453193-f70bf97b67ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
  discountText="SUMMER SALE 60% OFF"
  buttonText="Shop Now"
 
/>

<ProductCard
  imageUrl="https://plus.unsplash.com/premium_photo-1669446008075-ef763c28d75b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
  discountText="SUMMER SALE 60% OFF"

   buttonText = "explore more"
/>
  </div>
      <ProductList/>
    <Routes>
      <Route path='/signin' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/AdminSignUp' element={<AdminSignUp/>}/>
      <Route path='/AdminSignin' element={<AdminSignin/>}/>
      <Route path='/createProduct' element={<CreateProduct/>}/>
    </Routes>
     
    </div>
  )
}


export default App