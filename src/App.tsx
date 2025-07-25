
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import AdminSignUp from './pages/AdminSignUp'
import AdminSignin from './pages/AdminSignin'


const App = () => {
  return (
    <div>
      <Navbar/>
      <ProductList/>
    <Routes>
      <Route path='/signin' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/AdminSignUp' element={<AdminSignUp/>}/>
      <Route path='/AdminSignin' element={<AdminSignin/>}/>
    </Routes>
     
    </div>
  )
}

export default App