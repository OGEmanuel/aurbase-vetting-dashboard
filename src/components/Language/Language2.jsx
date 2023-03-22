import React from 'react'
import Circle from '../Circle'
import next from '../../assets/next.png'
const Language2 = ({onClick}) => {
  return (
    <section className='bg-white p-4 py-8  md:p-8 md:px-20'>
      
            <section className='flex  justify-between '>
            <div className='font-semibold relative'>
            <div className='absolute w-1/3 -top-5 -right-[2rem] md:hidden'>
            <Circle/>
           </div>
            <h1 className='font-bold text-[20px] md:text-[36px]'>Question 1</h1>
           <p className='text-lg md:text-[32px] w-[210px] md:w-full mt-[13px]'>What do you consider your greatest accomplishment?</p>
           <span className='flex items-center gap-2 mt-2'>
           <input type="radio" name='one' />
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam </p>
           </span>
           <span className='flex items-center gap-2 mt-2'>
           <input type="radio" name='one' />
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam </p>
           </span>
         
           <span className='flex items-center gap-2 mt-2'>
           <input type="radio" name='one' />
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam </p>
           </span>
           <span className='flex items-center gap-2 mt-2'>
           <input type="radio" name='one' />
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam </p>
           </span>
         
         
           </div>
           <div className='hidden md:flex justify-end'>
            <Circle/>
           </div>
            </section>
             <div className='flex justify-end md:mt-2 mt-8'><button onClick={onClick} className='bg-black rounded p-1 md:p-2 px-4 md:px-6 gap-2 text-white text-[10px] md:text-2xl flex items-center'> <p>Next</p> <span className='mt-0.5 w-[10px]'><img src={next} alt="forward" /></span></button></div>

    </section>
  )
}

export default Language2