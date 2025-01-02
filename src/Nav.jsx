import React from 'react'
import Bank from './assets/Bank.png'


const Nav = () => {
  return (
    <nav className=' bg-white flex flex-row justify-between m-0 p-5 fixed bottom left sub w-[100%]  font-sans'>
     <div>
      <img className='w-10' src="https://www.svgrepo.com/show/527753/home.svg" alt="home" />
        <p className='text-align'>Home</p>
      </div>
      <div>
      <img className='w-10' src="https://www.svgrepo.com/show/307925/loan-interest-time-value-of-money-effective.svg" alt="loan" />
        <p className='text-align'>Loan</p>
      </div>
      <div>
      <img className='w-10' src="https://www.svgrepo.com/show/532408/chart-line.svg" alt="wealth" />
        <p className='text-align'>Wealth</p>
      </div>
      <div>
      <img className='w-10' src="https://www.svgrepo.com/show/506207/gift.svg" alt="Reward" />
        <p className='text-align'>Reward</p>
      </div>
      <div>
      <img className='w-10' src="https://www.svgrepo.com/show/498301/profile-circle.svg" alt="me" />
        <p className='text-align'>Me</p>
      </div>
     </nav>
  )
}

export default Nav
