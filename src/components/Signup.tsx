import React from "react"
import { useAuth } from '../context/AuthContext'

export default function Signup() {
    const [username, setUsername] = React.useState("")
    const [password, setPassword ] = React.useState("")
    const {signup} = useAuth()

const handelSignup = async()=>{
    await signup( username, password)
    alert("Sign-up successfully")
}

  return (
    <div>
        <h2>Wellcome to sign In page</h2>

        <input onChange={ e => setUsername(e.target.value)}  className='border rounded-sm p-1 m-2 'placeholder='shiva' type="text" />
        <input onChange={ e => setPassword(e.target.value)} className='border rounded-sm p-1 m-2 'placeholder='1234'type="password" />
        <button  onClick={handelSignup} className='bg-green-500 rounded-md px-2 py-1 font-bold'>Sign-up</button>
    </div>
  )
}
