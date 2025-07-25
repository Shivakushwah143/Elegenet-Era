import React, { useState } from 'react'
import User from '../icons/User'
import Password from '../icons/Password'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function AdminSignUp() {
  const [username, setUsername]= useState("")
  const [password, setPassword]= useState("")
  const {AdminSignUp} = useAuth()

  const handelSignup = async ()=>{
    await AdminSignUp(username,password)
    alert("Sing In successfully")
  }
  
  return (

    <>
      <div className='min-h-screen bg-black flex justify-center items-center p-4'>
        <div className='flex flex-col md:flex-row gap-4  max-w-4xl w-full'>
          {/* Image Section */}
          <div className='md:w-1/2 flex justify-center items-center'>
            <img
              className='w-full h-auto max-h-[500px] object-cover rounded-lg'
              src="https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D"
              alt="Create account"
            />
          </div>

          {/* Form Section */}
          <div className='md:w-1/2 bg-neutral-900 border border-neutral-700 rounded-lg p-8'>
            <div className='mb-8'>
              <h2 className='text-4xl font-bold text-white'>Create Account</h2>
              <p className='text-xl text-neutral-400 mt-2'>Join us today and get started</p>
            </div>

            <div className='space-y-4'>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <User />
                </div>
                <input
                onChange={e => setUsername(e.target.value) }
                  type="text"
                  placeholder='Username'
                  className='w-full pl-11 pr-4 py-3 bg-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-600'
                />
              </div>

              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Password />
                </div>
                <input
                onChange={ e => setPassword(e.target.value) }
                  type="password"
                  placeholder='Password'
                  className='w-full pl-11 pr-4 py-3 bg-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-600'
                />
              </div>
            </div>

            <button
            onClick={handelSignup}
            className='mt-6 bg-yellow-600 hover:bg-yellow-700 py-3 rounded-lg w-full font-medium text-black transition-colors duration-200'>
              Create Account
            </button>
            <div> <div className="text-center mt-8">
              <p className="text-neutral-400 text-base">
                Already have an account?{" "}
                <Link
                  href="/AdminSignin"
                  className="text-orange-500 hover:text-orange-400 font-medium transition-colors duration-200"
                >
                  Sign in here
                </Link>
              </p>
            </div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminSignUp























// import { useState } from "react"
// import { Mail, Lock, User } from "lucide-react"
// import { Link } from "@tanstack/react-router"

// export default function Signup() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   })
//   const [focusedField, setFocusedField] = useState(null)

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }))
//   }

//   return (
//     <div className="min-h-screen bg-black flex flex-col md:flex-row">
//       {/* Image Section - Hidden on mobile, shown on md and up */}
//       <div className="hidden md:flex md:flex-1 bg-neutral-900 items-center justify-center p-8">
//         <div className="w-full h-full max-h-[600px] bg-neutral-800 border border-neutral-700 rounded-2xl overflow-hidden">
//           <img
//             src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg"
//             alt="Professional workspace"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* Form Section */}
//       <div className="flex-1 bg-black flex items-center justify-center p-4 md:p-8">
//         <div className="w-full max-w-md bg-neutral-900 border border-neutral-700 rounded-2xl p-8 md:p-10">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Create Account</h1>
//             <p className="text-neutral-400 text-base">Join us today and get started</p>
//           </div>

//           {/* Form */}
//           <form className="space-y-6">
//             {/* Name Field */}
//             <div className="space-y-2">
//               <label htmlFor="name" className="block text-sm font-medium text-white">
//                 Full Name
//               </label>
//               <div className="relative">
//                 <User
//                   className={
//                     "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 " +
//                     (focusedField === "name" ? "text-orange-500" : "text-neutral-500")
//                   }
//                 />
//                 <input
//                   id="name"
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => handleInputChange("name", e.target.value)}
//                   onFocus={() => setFocusedField("name")}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Enter your full name"
//                   className={
//                     "w-full pl-11 pr-4 py-3.5 bg-neutral-800 rounded-xl text-white text-base placeholder-neutral-500 outline-none transition-colors duration-200 border-2 " +
//                     (focusedField === "name" ? "border-orange-500" : "border-neutral-600 hover:border-neutral-500")
//                   }
//                 />
//               </div>
//             </div>

//             {/* Email Field */}
//             <div className="space-y-2">
//               <label htmlFor="email" className="block text-sm font-medium text-white">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <Mail
//                   className={
//                     "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 " +
//                     (focusedField === "email" ? "text-orange-500" : "text-neutral-500")
//                   }
//                 />
//                 <input
//                   id="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => handleInputChange("email", e.target.value)}
//                   onFocus={() => setFocusedField("email")}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Enter your email address"
//                   className={
//                     "w-full pl-11 pr-4 py-3.5 bg-neutral-800 rounded-xl text-white text-base placeholder-neutral-500 outline-none transition-colors duration-200 border-2 " +
//                     (focusedField === "email" ? "border-orange-500" : "border-neutral-600 hover:border-neutral-500")
//                   }
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div className="space-y-2">
//               <label htmlFor="password" className="block text-sm font-medium text-white">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock
//                   className={
//                     "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 " +
//                     (focusedField === "password" ? "text-orange-500" : "text-neutral-500")
//                   }
//                 />
//                 <input
//                   id="password"
//                   type="password"
//                   value={formData.password}
//                   onChange={(e) => handleInputChange("password", e.target.value)}
//                   onFocus={() => setFocusedField("password")}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Create a strong password"
//                   className={
//                     "w-full pl-11 pr-4 py-3.5 bg-neutral-800 rounded-xl text-white text-base placeholder-neutral-500 outline-none transition-colors duration-200 border-2 " +
//                     (focusedField === "password" ? "border-orange-500" : "border-neutral-600 hover:border-neutral-500")
//                   }
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 px-4 rounded-xl transition-colors duration-200 text-base mt-8"
//             >
//               Create Account
//             </button>
//           </form>

//           {/* Sign In Link */}
// <div className="text-center mt-8">
//   <p className="text-neutral-400 text-base">
//     Already have an account?{" "}
//     <Link
//       href="/login"
//       className="text-orange-500 hover:text-orange-400 font-medium transition-colors duration-200"
//     >
//       Sign in here
//     </Link>
//   </p>
// </div>
//         </div>
//       </div>
//     </div>
//   )
// }
