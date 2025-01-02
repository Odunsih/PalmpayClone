import { useState } from 'react'
import Nrytech from './assets/Nrytech.jpg'
import './App.css'

function App() {

  return (
    <>
     <div className='flex flex-row justify-between m-2 font-sans'>

      <img className='p-2 w-16 rounded-[50%]' src={Nrytech} alt="My img" />
      <div className='p-4 pl-1'>
        <h2 className='font-semibold'>Hi, Henry</h2>
        <p>Welcome, let's make payments!</p>
      </div>

      <img className='p-1 w-10' src="https://www.svgrepo.com/show/31480/notification-bell.svg" alt="My img" />
      <img className='p-1 w-10' src="https://www.svgrepo.com/show/31480/notification-bell.svg" alt="My img" />
     </div>

     <div className='bg-white m-5 rounded-[15px] p-0 font-sans'>
      <div className='bg-purple-200 rounded-[15px] w-[100%]'>
      <div className='flex flex-row justify-between m-2 font-sans p-2'>
        <p className='text-[13px]'>Available Balance</p>
        <p className='text-[13px]'>Transaction History <span className='text-gray-400'>&gt;</span></p>
      </div>

      <div className='flex flex-row justify-between m-2 font-sans p-2'>
        <h1 className='text-[16px] font-bold'>100000</h1>
        <button className='btn btn-primary rounded-3xl text-lg'>Add Money</button>
      </div>
      </div>
      
       <div className='bg-white m-0 rounded-[15px] p-0 pl-5 pr-5 font-sans flex flex-row justify-between'>
        <p>Boost your savings, earn <span className='text-purple-700 font-bold'>20% p.a. </span>daily.</p>
        <p className='text-purple-700'>Act Now <span className='bg-purple-200 rounded-[50%]'> &gt;</span></p>
       </div>
     </div>
    </>
  )
}

export default App
