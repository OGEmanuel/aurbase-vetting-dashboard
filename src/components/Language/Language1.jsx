import React from 'react'
import Checklist from '../../assets/Images/checklist.png'

const Language1 = ({onClick}) => {
  return (
    <section className='bg-white  md:px-14 p-8'>
        <span className='flex flex-col-reverse md:flex-row'>
        <div>
            <p className='text-lg md:text-2xl'>Language  Test</p>
            <h1 className='font-semibold text-[20px] md:text-[42px]'>We measure your
proficiency in English</h1>
<p className='text-[12px] md:text-lg'>The proficiency test is made up of multiple sections each comprised of 15 - 20 questions.</p>
<div className='gap-2 flex items-center mt-4'>
<span className='bg-[#FFCA14] items-center font-semibold text-[14px] md:text-2xl text-white rounded-[50%] w-[20px] h-[20px] md:w-[40px] md:h-[40px] flex justify-center'>1</span>
<p className='text-lg'>Grammar</p>
</div>
<div className='gap-2 flex items-center mt-4'>
<span className='bg-[#FFCA14] items-center font-semibold text-[14px] md:text-2xl text-white rounded-[50%] w-[20px] h-[20px] md:w-[40px] md:h-[40px] flex justify-center'>2</span>
<p className='text-lg'>Vocabulary</p>
</div>
<div className='gap-2 flex items-center mt-4'>
<span className='bg-[#FFCA14] items-center font-semibold text-[14px] md:text-2xl text-white rounded-[50%] w-[20px] h-[20px] md:w-[40px] md:h-[40px] flex justify-center'>3</span>
<p className='text-lg'>Reading Comprehension</p>
</div>

        </div>
        <div>
            <img src={Checklist} alt="checklist" />
            <p className='text-base font-bold md:semi-bold md:text-[32px] text-center md:text-left'>Test Duration:<span className='text-base font-bold md:font-semi-bold md:text-2xl text-[#FFCA14]'>30 minutes </span></p>
        </div>
        </span>
        <div ><button onClick={onClick} className='bg-black px-14 text-white p-2 rounded mt-10'>Take  Test</button></div>

    </section>
  )
}

export default Language1