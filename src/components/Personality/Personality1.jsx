import React from 'react'
import Checklist from '../../assets/Images/checklist.png'
const Personality1 = ({onClick}) => {
  return (
    <section className='flex flex-col-reverse md:flex-row items-center bg-white p-8 mt-5 rounded pb-14'>
        <div>
            <p className='tetx-lg md:text-[30px]'>Personality Test</p>
            <h3 className='text-[20px] md:text-[40px] text-[#121212] font-semibold '>Be yourself and answer
honestly to give insight on
your personality type</h3>
    <p className='text-[14px] md:text-lg w-[80%] mt-4'>There are no wrong answers, test take 10 - 15 minutes </p>
    <span className='mt-6 block'><button onClick={onClick} className='text-white bg-black px-20 p-2 rounded'>Take Test</button></span>
        </div>
        <div className='w-full '>
            <img src={Checklist} alt="illustration of checklist" />
        </div>
    </section>
  )
}

export default Personality1