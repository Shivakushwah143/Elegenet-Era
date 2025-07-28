import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import Password from '../icons/Password'
import User from '../icons/User'

export default function AdminSignin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { adminLogin } = useAuth()

  const handelSubmit = async () => {
    await adminLogin(username, password)
    alert("admin SignIn successfully")
  }

  return (
    <>
      <div className='min-h-screen bg-black flex justify-center items-center p-4'>
        <div className='flex flex-col md:flex-row gap-4  max-w-4xl w-full'>
          {/* Image Section */}
          <div className='md:w-1/2 flex justify-center items-center'>
            <img
              className='w-full h-auto max-h-[500px] object-cover rounded-lg'
              src="https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmxzfGVufDB8fDB8fHww"
              alt="Create account"
            />
          </div>

          {/* Form Section */}
          <div className='md:w-1/2 bg-neutral-900 border border-neutral-700 rounded-lg p-8'>
            <div className='mb-8'>
              <h2 className='text-4xl font-bold text-white'>Welcome Back</h2>
              <p className='text-xl text-neutral-400 mt-2'>Sign in to your account</p>
            </div>

            <div className='space-y-4'>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <User />
                </div>
                <input
                  onChange={e => setUsername(e.target.value)}
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
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  placeholder='Password'
                  className='w-full pl-11 pr-4 py-3 bg-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-600'
                />
              </div>
            </div>

            <button
              onClick={handelSubmit}
              className='mt-6 bg-yellow-600 hover:bg-yellow-700 py-3 rounded-lg w-full font-medium text-black transition-colors duration-200'>
              Login Account
            </button>
            <div> <div className="text-center mt-8">
              <p className="text-neutral-400 text-base">
                Already have an account?{" "}
                <Link
                  to="/AdminSignin"
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
