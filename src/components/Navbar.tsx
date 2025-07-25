


import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }
  console.log(user)
  return (
   
     <div className="flex items-center justify-between bg-gray-800 px-6 py-4 shadow-md">
  <div className="flex items-center space-x-4">
 
    <img className='h-10 w-10 bg-emerald-100 flex items-center justify-center rounded-full' src="https://plus.unsplash.com/premium_photo-1677687188601-f7b6aff29aa8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8" alt="" />

    <h2 className="text-xl font-bold text-white">
      {user ? `Welcome , ${user.username}` : "Welcome Guest"}
    </h2>
  </div>

  <div className="flex items-center space-x-6">
    {user && (
      <>
     <img className='h-10 w-10 bg-emerald-100 flex items-center justify-center rounded-full' src={user.avtar} alt="" />
      </>
    )}

    {user ? (
      <button  onClick={ ()=> { logout(); navigate('/signin')} }
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
      >
        Logout
      </button>
    ) : (
      <Link
        to="/signin"
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
      >
        Login
      </Link>
    )}
  </div>
</div>
    
  )
}

export default Navbar










