import React from 'react'
import Checklist from '../../assets/images/checklist.png'
import Thumbs from '../../assets/thumbs-up.png'
const Personality4 = () => {
  return (
    <section className='flex flex-col-reverse md:flex-row justify-between items-start bg-white p-8 mt-5 rounded 2xl:px-14'>
    <div className='mt-2 md:mt-20 2xl:w-[60%]'>
        <p className='text-[18px] md:text-[30px]'>Personality Test</p>
     <div className='flex items-center gap-2 md:mt-5 '><h3 className='txet-[20px] md:text-[40px] text-[#121212] font-semibold '>Completed</h3> <span className='block w-[15px] md:w-full'><img src={Thumbs} alt="thumbs" /></span> </div>
<p className='text-[12px] md:text-lg md:mt-5 2xl:w-[70%]'>You have completed the Personality Test, please take the Language Proficiency Test to be on track.</p>

    </div>
    <div className='w-full  2xl:w-1/2 '>
        <img src={Checklist} alt="illustration of checklist" />
    </div>
</section>
  )
}

export default Personality4