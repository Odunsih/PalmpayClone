import { useState } from 'react'
import Nrytech from './assets/Nrytech.jpg'
import Bank from './assets/Bank.png'
import Withdraw from './assets/withdraw.png'
import Contact from './assets/Contact.png'
import './App.css'
import Nav from './Nav'

function App() {

  return (
    <>
     <div className='flex flex-row justify-between m-2 font-sans'>

      <img className='p-2 w-20 rounded-[50%]' src={Nrytech} alt="My img" />
      <div className='p-4 pl-1'>
        <h2 className='font-semibold'>Hi, Henry</h2>
        <p>Welcome, let's make payments!</p>
      </div>
      <img className='p-1 w-10' src="https://www.svgrepo.com/show/447597/customer-care.svg" alt="My img" />
      <img className='p-1 w-10' src="https://www.svgrepo.com/show/31480/notification-bell.svg" alt="My img" />
     </div>
{/* BALANCE SECTION */}
     <div className='bg-white m-5 rounded-[15px] p-0 font-sans'>
      <div className='bg-purple-200 rounded-[15px] w-[100%]'>
      <div className='flex flex-row justify-between m-2 font-sans p-2'>
        <div className='flex flex-row'>
        <p className='text-[13px]'>Available Balance </p><img className='pl-1 w-7' src="https://www.svgrepo.com/show/532493/eye.svg" alt="" />
        </div>
        <p className='text-[13px]'>Transaction History <span className='text-gray-400'>&gt;</span></p>
      </div>

      <div className='flex flex-row justify-between m-2 font-sans p-2'>
        <h1 className='text-[20px] font-bold'>₦100,000.00</h1>
        <button className='btn btn-primary rounded-3xl text-lg'>Add Money</button>
      </div>
      </div>
      
       <div className='bg-white m-0 rounded-[15px] p-0 pl-5 pr-5 pb-3 font-sans flex flex-row justify-between'>
        <p>Boost your savings, earn <span className='text-purple-700 font-bold'>20% p.a. </span>daily.</p>
        <p className='text-purple-700'>Act Now <span className='bg-purple-200 rounded-[50%] w-7'> &gt;</span></p>
       </div>
     </div>
     {/* Transfer */}
     <div className='bg-white m-5 rounded-[15px] font-sans p-2'>
      <h1 className='font-bold text-[16px] m-5 mt-10 pt-5'>Money Transfer</h1>
      <div className='flex flex-row justify-between m-5 text-align'>
      <div>
      <img className='w-16' src={Bank} alt="Bank.png" />
        <p>To Bank</p>
      </div>
      <div>
      <img className='w-16' src={Contact} alt="Bank.png" />
        <p>To PalmPay</p>
      </div>
      <div>
      <img className='w-16' src={Withdraw} alt="Bank.png" />
        <p>Withdraw</p>
      </div>
      </div>
     </div>
     {/* mod */}
     <div className='flex flex-row justify-between p-4 m-5 bg-white rounded-[15px] font-sans'>
      <div>
        <h1 className='font-bold text-[16px]'>Your Earnings Report is Updated!</h1>
        <h2>Tap to view your monthly earning details and</h2>
      </div>
      <button className='btn btn-primary rounded-3xl text-lg pl-5 pr-5'>Go</button>
     </div>

     {/* Services */}

     <div className='p-4 m-5 mb-20 bg-white rounded-[15px] font-sans'>
      <div className='flex flex-row justify-between '>
        <h1 className='font-bold text-[16px] m-5 mt-10 pt-5 '>Services</h1>
        <h2 className='font-bold text-[16px] m-5 mt-10 pt-5 text-gray-200'>More &gt;</h2>
      </div>
      <div className='flex flex-row justify-between m-5 text-align'>
      <div className='text-align'>
      <img className='w-16' src={Bank} alt="Bank.png" />
        <p>Airtime</p>
      </div>
      <div className='text-align'>
      <img className='w-16' src={Bank} alt="Bank.png" />
        <p>Data</p>
      </div>
      <div className='text-align'>
      <img className='w-16' src={Bank} alt="Bank.png" />
        <p>Betting Fund</p>
      </div>
      <div className='text-align'>
      <img className='w-16' src={Bank} alt="Bank.png" />
        <p>Electricity</p>
      </div>
      </div>
      <div className='flex flex-row justify-between m-5'>
      <div className='text-align'>
      <img className='w-16' src={Bank} alt="Bank.png" />
        <p>TV</p>
      </div>
      <div className='text-align'>
      <img className='w-16' src={Bank} alt="Bank.png" />
        <p>Win Big</p>
      </div>
      <div className='text-align'>
      <img className='w-16' src={Bank} alt="Bank.png" />
        <p>Refer & Earn</p>
      </div>
      <div className='text-align'>
      <img className='w-16' src={Bank} alt="Bank.png" />
        <p>ATM Card</p>
      </div>
      </div>
      <div className='flex flex-row justify-between m-5'>
      <div className='text-align'>
      <img className='w-16' src={Bank} alt="Bank.png" />
        <p>CashBox</p>
      </div>
      <div className='text-align'>
      <img className='w-16' src={Bank} alt="Bank.png" />
        <p>Insurance</p>
      </div>
      <div className='text-align'>
      <img className='w-16' src={Bank} alt="Bank.png" />
        <p>SmartEarn</p>
      </div>
      <div className='text-align'>
      <img className='w-16' src={Bank} alt="Bank.png" />
        <p>Learn</p>
      </div>
      </div>
     </div>
     {/* NAV */}
     <Nav />
    </>
  )
}

export default App
