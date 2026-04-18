import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] =useState('')
  const[captainData, setCaptainData] =useState({})

  const submitHandler=(e)=>{
    e.preventDefault();
    setCaptainData({
      email:email,
      password:password
      
    })
    console.log(captainData)
    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='mb-10 w-20 ' src="https://pngimg.com/d/uber_PNG24.png" alt=''/>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
        <h3 className='font-medium text-lg mb-2'>What's your email</h3>
        <input
         required
         value={email}
         onChange={(e)=>{
          setEmail(e.target.value)
         }}
         className='bg-[#eeeeee] px-2 py-4 mb-5 rounded w-full text-lg placeholder:text-base'
         type="email" 
         placeholder="enter the captain email" />
        <h3 className='font-medium text-lg mb-2'> Enter the Password</h3>
        <input
         reduired
         value={password}
         onChange={(e)=>{
            setPassword(e.target.value)
         }}
         className='bg-[#eeeeee] px-2 py-4 mb-10 rounded border w-full text-lg placeholder:text-base'
         type="password" 
         placeholder="enter the password" />
        
        <button 
        className='bg-[#111] mb-5 px-4 py-2 font-semibold w-full text-white text-lg placeholder:text-base'
        >
           Login
        </button>
        <p>join a feel? <Link to='/captain-signup' className='font-medium ml-2 text-blue-600 '>Register as a Captain</Link> </p>
        </form>
      </div>
       <div>
          <Link to='/login'
          className='bg-[#d5622d] flex item-center justify-center text-white font-semibold mb-7 px-4 py-3  w-full text-lg placeholder:text-base'
          >Sign in as User</Link>
       </div>

    </div>
  )
}

export default CaptainLogin