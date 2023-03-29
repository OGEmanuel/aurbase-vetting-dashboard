import React, { useState } from 'react'
import MoneyBag from '../../assets/moneybag.png'
import Eye from '../../assets/white-eye.png'
import Yellow from '../../assets/yellow-line.png'
import Exchange from '../../assets/exchange.png'
import Info from '../../assets/info.png'
import { useDispatch } from 'react-redux'
import { earningModal } from '../../redux-store/features/earning-modal'
import { overlayMain } from '../../redux-store/features/open-overlay-body'


export const EarningCardOne = () => {
  const [showMoney,setShowMoney]=useState(true)
  const handleClick=()=>{
      setShowMoney(!showMoney)
  }
  return (
    <section className='bg-dp bg-[#121212] text-white flex justify-between rounded-[10px] overflow-hidden px-5 md:px-0 py-4 md:py-0'>
        <aside className='flex flex-col  justify-center md:pl-5 md:px-10  gap-2 w-full'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-4'>
          <span><img src={MoneyBag} alt="money bag" /></span>
        <p className='text-[20px] font-semibold '>Available Balance</p>
          </div>
        <span className='md:hidden' onClick={handleClick}><img src={Eye} alt="eye-icon" /></span>
     </div>
     <div className='flex items-center md:gap-24'>
        <p className='text-[48px] font-bold'>{showMoney?'$1,320.00':'$****.**'}</p>
        <span className='hidden md:block' onClick={handleClick}><img src={Eye} alt="eye-icon" /></span>
     </div>
        </aside>
   <aside className=' hidden md:block pt-12 '>
    <span>
        <img src={Yellow} alt="pattern" />
    </span>
   </aside>
    </section>
  )
}



export const EarningCardTwo = () => {
  const dispatch=useDispatch()
  const handleClick=()=>{
    dispatch(earningModal())
    dispatch(overlayMain())
  }
    return (
        <section className='flex flex-col'>
      <div className='bg-black  rounded-[10px] text-white p-4 px-4'>
      <p className='text-[20px] font-semibold pb-5'>Account Number: 0100000000</p>
      <div className='flex  justify-between'>
        <span className='flex gap-2 '>
            <img src={Exchange} alt="exchange" />
             <p className='text-lg font-semibold'>Withdraw Money</p>
        </span>
        <button className='bg-[#FFCA14] px-8 rounded' onClick={handleClick}>Go</button>
      </div>
      </div>
      <span className='flex gap-2 items-center px-5 mt-6'>
         <span><img src={Info} alt="info" /></span>
        <p>Kindly create a Perfect Money Account.</p>
      </span>
      </section>
    )
  }
