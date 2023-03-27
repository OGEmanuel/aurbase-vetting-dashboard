import React from 'react'
import Header from '../dashboard/header'
import User from '../assets/images/user.png'
import BCheck from '../assets/blackcheck.png'
import GCheck from '../assets/greencheck.png'

const Interview = () => {
  return (
    <div>
        <Header title='Progress'/>
        <p>Schedule a Live Interview</p>
        <section className='bg-white p-8 md:px-10 flex flex-col md:flex-row items-center md:justify-between '>
         <div className='md:w-1/2'>
            <header className='flex md:justify-between items-center gap-4'>
            <span><img src={User} alt="user picture" /></span>
            <span className='font-semibold md:text-right'>
                <p className='text-base md:text-[36px] '>Joseph Micheal</p>
                <p className='text-[10px] md:text-lg'>Product Designer</p>
                <p className='text-[10px] md:text-sm text-[#FFCA14]'>Ready to work</p>
            </span>
            </header>
            <article className='flex flex-col gap-4 mt-10 text-[12px] md:text-lg'>
              <span className='flex justify-between'>
                <p>Email Address</p>
                <p className='font-semibold'>Joemickey@work.com</p>
                </span>
                <span className='flex justify-between'>
                <p>Phone Number</p>
                <p className='font-semibold'>+234 7807 6728 089</p>
                </span>
                <span className='flex justify-between'>
                <p>Country of Residence</p>
                <p className='font-semibold'>Nigeria</p>
                </span>
                <span className='flex justify-between'>
                <p>Country of citizenship</p>
                <p className='font-semibold'>Nigeria</p>
                </span>
                <span className='flex justify-between'>
                <p>Payment Expectations</p>
                <p className='font-semibold'>$800:00</p>
                </span>
                </article>
         </div>
         <div className='md:w-[40%] text-2xl '>
          <header className='flex justify-between'>
            <p>Matching Status</p>
            <span className='bg-[#00C66733] flex justify-center items-center w-[139px] h-[36px] rounded-[15px] text-lg'>Incoming </span>
          </header>
          <p className='mt-[55px]'>Matching Stages</p>
          <section className='w-[75%] mt-4'>
            <div className='flex justify-between'>
                <span><img src={BCheck} alt="black-check" /></span>
                <span><img src={GCheck} alt="green-check" /></span>
            </div>
            <div className='flex justify-between gap-1 '>
                <span className='bg-black w-[86px] h-[20px] rounded-[2px]'></span>
                <span className='bg-black w-[86px] h-[20px] rounded-[2px]'></span>
                <span className='bg-black w-[86px] h-[20px] rounded-[2px]'></span>
                <span className='border border-black w-[86px] h-[20px] rounded-[2px]'></span>

                

            </div>
          </section>
          <p className='mt-[32px]'>Schedule Interview Date: <span>10/11/2022</span> </p>
          <p className='mt-[40px]'> Schedule Interview Link:</p>
          <p className='text-lg text-[#FFCA144D]'>https://www.figma.com/file/SzMGvwwGrFUnekP7MEljEx/AurBase-Tech?node-id=140%3A1790
</p>
         </div>

        </section>
    </div>
  )
}

export default Interview