import React from 'react'
import Checklist from '../../assets/Images/checklist.png'

const Language3 = () => {
  return (
   <section className='bg-white rounded-[10px] p-14 flex justify-between items-start'>
    <div>
        <p className='text-2xl'>Language  Test</p>
        <h1 className='text-[32px] font-semibold mt-5'>Questions have been answered</h1>
        <p className='text-[32px] font-bold mt-10'>Tips</p>
        <div className='gap-2 flex items-center mt-4'>
<span className='bg-[#FFCA14] items-center font-semibold text-2xl text-white rounded-[50%] w-[40px] h-[40px] flex justify-center'>1</span>
<p className='text-lg'>You can retake test numerous time.</p>
</div>
<div className='gap-2 flex items-center mt-4'>
<span className='bg-[#FFCA14] items-center font-semibold text-2xl text-white rounded-[50%] w-[40px] h-[40px] flex justify-center'>2</span>
<p className='text-lg'>Higher grade will be recorded.</p>
</div>
<div className='flex gap-5 mt-20'>
    <button className='bg-black text-white p-2 px-14 rounded'>Retake Test</button>
    <button className='bg-black text-white p-2 px-14 rounded'>Stack Test</button>

</div>
    </div>
    <div>
    <p className='font-semibold text-[32px] flex justify-end items-center'>Your Grade:  <span className='text-[#FFCA14] '> B </span></p>
        <span className='block -mt-10'><img src={Checklist} alt="illustration" /> </span>
        <p className='font-semibold text-[32px] mt-6 ml-14'>Test Duration: <span className='text-[#FFCA14] text-2xl'> 20 minutes </span></p>
    </div>

   </section>
  )
}

export default Language3