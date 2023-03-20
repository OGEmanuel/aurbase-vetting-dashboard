import React from 'react'
import Close from '../assets/close.png'
import Logo from '../assets/images/logo.png'

const ForgetCard = () => {
  return (
    <div className='bg-white px-5 md:px-10  lg:px-20 py-10' >
    <div className='hidden lg:flex justify-end'><img src={Close} alt="" /></div>
    <div className='flex justify-start lg:justify-center'><img src={Logo} alt="" /></div>
     <p className='lg:text-center mt-4 text-[45px] font-semibold'>Forget Password</p>
     <p className='text-left lg:text-center mt-4 lg:w-[75%] mx-auto'>Kindly enter the email address associated to your account to reset your password </p>
     <form action="">
        <label htmlFor="label" className='block font-bold text-lg mt-8'>Email Address</label>
        <input type="text" placeholder='Enter your email address here' className='w-full mt-2 border border-[#D6D8E7] px-5 rounded h-[58px] font-bold'/>
        <div className='mt-14'><button className='text-white bg-black p-4 w-full rounded-lg'>Proceed</button></div>
     </form>
    </div>
  )
}

export default ForgetCard