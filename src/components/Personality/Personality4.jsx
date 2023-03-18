import React from 'react'
import Checklist from '../../assets/images/checklist.png'
import Thumbs from '../../assets/thumbs-up.png'
const Personality4 = () => {
  return (
    <section className='flex justify-between items-start bg-white p-8 mt-5 rounded'>
    <div className='mt-20'>
        <p className='text-[30px]'>Personality Test</p>
     <div className='flex items-center gap-2 mt-5 '><h3 className='text-[40px] text-[#121212] font-semibold '>Completed</h3> <span className='block '><img src={Thumbs} alt="thumbs" /></span> </div>
<p className='text-lg mt-5'>You have completed the Personality Test, please take the Language Proficiency Test to be on track.</p>

    </div>
    <div className='w-full '>
        <img src={Checklist} alt="illustration of checklist" />
    </div>
</section>
  )
}

export default Personality4