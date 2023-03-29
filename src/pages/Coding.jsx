import React from 'react'
import Header from '../dashboard/header'
const Coding = () => {
  return (
    <div>
        <Header title='Live Coding  challenge'/>
        <p className='text-2xl mb-[17px]'>Answer the questions below </p>
        <section className='flex flex-col md:flex-row  gap-[31px]'>
            <div className='bg-white md:w-[50%] rounded-[10px] p-5'>
                <p className='text-2xl'>Question 1</p>
                <p className='mt-[11px] text-lg '>how can you manipulate the database of  an organization when a particular 
                    field is m misssing What do you consider your greatest accomplishment?</p>
            </div>
            <div className='md:w-[50%] '>
              <textarea name="" id="" cols="30" rows="10" placeholder='Type your Code  here' className='text-2xl italic outline-none p-5 bg-[#121212] w-full rounded-[10px] resize-none text-white pt-5'></textarea>
            </div>
        </section>
        <div className='flex justify-end mt-8'><button className='bg-[#121212] text-white p-2.5 px-5'>Proceed to Next</button></div>
    </div>
  )
}

export default Coding