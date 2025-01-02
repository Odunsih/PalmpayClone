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
    </>
  )
}

export default App
