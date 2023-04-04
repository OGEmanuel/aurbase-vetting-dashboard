import React from 'react'
import Circle from '../Circle'
import next from '../../assets/next.png'
const Personality3 = ({onClick}) => {
  return (
    <section className='bg-white p-4 py-8  md:p-8 md:px-20 2xl:pb-[10rem]'>
      
            <section className='flex   md:justify-between md:mt-10'>
            <div className='font-semibold relative'>
            <div className='absolute w-1/3 -top-5 -right-[2rem] md:hidden'>
            <Circle/>
           </div>
            <h1 className='font-bold text-[20px] md:text-[36px]'>Question 1</h1>
           <p className='text-[18px] md:text-[32px]   w-[210px] md:w-full font-normal'>What do you consider your greatest accomplishment?</p>
           <span className='flex items-center gap-2 mt-10 '>
           <input type="radio" name='one' id='one' className='w-5 h-5 accent-black' />
          <label htmlFor='one'> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam </label>
           </span>
           <span className='flex items-center gap-2 mt-8'>
           <input type="radio" name='one' id='2' className='w-5 h-5 accent-black' />
          <label htmlFor='2' > Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam </label>
           </span>
         
           <span className='flex items-center gap-2 mt-8'>
           <input type="radio" name='one' id='3' className='w-5 h-5 accent-black'/>
          <label htmlFor='3' > Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam </label>
           </span>
           <span className='flex items-center gap-2 mt-8'>
           <input type="radio" name='one' id='4' className='w-5 h-5 accent-black'/>
          <label htmlFor='4' > Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam </label>
           </span>
         
         
           </div>
           <div className='hidden md:flex justify-end'>
            <Circle/>
           </div>
            </section>
             <div className='flex justify-end mt-2 2xl:mt-[10rem]'><button onClick={onClick} className='bg-black rounded p-2 px-6 gap-2 text-white text-2xl flex items-center'> <p>Next</p> <span className='mt-0.5'><img src={next} alt="forward" /></span></button></div>

    </section>
  )
}

export default Personality3