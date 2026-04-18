import React, {useState} from 'react'
import { Link } from 'react-router-dom'
const CaptainSignup = () => {
  const[firstName , setFirstName] = useState('')
  const[lastName , setLastName] = useState('')
  const[email , setEmail] = useState('')
  const[password , setPassword] = useState('')
  const[userData , setUserData] = useState({})

  const submitHandler= (e)=>{
        e.preventDefault()
        setUserData({
          fullName:{
              firstName:firstName,
              lastName:lastName
          },
        
          email:email,
          password:password
        })
        console.log(userData)
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between '>
      <div>
        <img 
        className='mb-10 w-20 ml-2  ' 
         src="https://pngimg.com/d/uber_PNG24.png" alt="" />
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>
          <h3 className='font-medium text-lg mb-4 justify-center'>What`s Your Name</h3>
          <div className='flex gap-4 mb-5 '>
            <input 
            required
            className='bg-[#eeeeee] w-1/2 py-2 px-5 border  rounded text-lg placeholder:text-base'
            value={firstName}
            onChange={(e)=>{
              setFirstName(e.target.value)
            }}
            type="name" 
            placeholder="firstName" />
            <input
            required
            className='bg-[#eeeeee]  w-1/2 py-2 px-5 border rounded text-lg placeholder:text-base'
            value={lastName}
            onChange={(e)=>{
              setLastName(e.target.value)
            }}
            type="name"
            placeholder="lastName" />
          </div>
          <h3 className='font-medium text-lg mb-3 mt-2'>What`s your Email </h3>
          <input
          required
          className='bg-[#eeeeee] mb-5  py-3 px-5 w-full border rounded text-lg placeholder: text-base' 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          type="text" 
           placeholder="Enter Email- exm@gmail.com  " />
           <h3 className='font-medium text-lg mb-3  ' >Enter Password </h3>
           <input 
           required
           className='bg-[#eeeeee] mb-7  py-3 w-full px-5 text-lg border rounded placeholder:text-base'
           value={password}
           onChange={(e)=>{
            setPassword(e.target.value)
           }}
           type="password" 
           placeholder='Enter Password' />
           <button
           className='bg-[#000] mb-3 text-white py-3 w-full text-xl rounded'
           >Login</button>
           <p className='ml-6 font-medium'> Alredy have a Account ?<Link to='/captain-login' className='ml-1 font-medium text-blue-600'>Login here</Link> </p>
        </form>
      </div>
      <div>
        <p>
          By procceding you consent to get calls,
           (WhatApp or SMS messages ) including by 
          automated means, from Uber and its 
          affecated to the number provided.
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup