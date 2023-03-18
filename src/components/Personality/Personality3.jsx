import React from 'react'
import Circle from '../Circle'
import next from '../../assets/next.png'
const Personality3 = ({onClick}) => {
  return (
    <section className='bg-white p-8 px-20'>
      
            <section className='flex  justify-between'>
            <div className='font-semibold'>
            <h1 className='font-bold text-[36px]'>Question 1</h1>
           <p className='text-[32px]'>What do you consider your greatest accomplishment?</p>
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
           <div>
            <Circle/>
           </div>
            </section>
             <div className='flex justify-end mt-2'><button onClick={onClick} className='bg-black rounded p-2 px-6 gap-2 text-white text-2xl flex items-center'> <p>Next</p> <span className='mt-0.5'><img src={next} alt="forward" /></span></button></div>

    </section>
  )
}

export default Personality3