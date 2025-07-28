
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import AdminSignUp from './pages/AdminSignUp'
import AdminSignin from './pages/AdminSignin'
import CreateProduct from './pages/CreateProduct'
import Dashbord from './pages/Dashbord'
import Home from './pages/Home'


const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>

     
      <Routes>
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/AdminSignUp' element={<AdminSignUp />} />
        <Route path='/AdminSignin' element={<AdminSignin />} />
        <Route path='/createProduct' element={<CreateProduct />} />
        <Route path='/dashbord' element={<Dashbord />} />
      </Routes>

    </div>
  )
}


export default App