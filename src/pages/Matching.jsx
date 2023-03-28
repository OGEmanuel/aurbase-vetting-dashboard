import React from 'react'
import Header from '../dashboard/header'
import Logo from '../assets/matching-logo.png'
const Matching = () => {
  return (
    <div>
        <Header title='Matching'/>
        <section className='bg-matchdp bg-[#121212] flex flex-col md:flex-row justify-center items-center rounded-[10px]  py-14 gap-3 '>
            <span><img src={Logo} alt="" /></span>
            <p className='text-white text-[18px] px-6 md:text-[22px] font-semibold text-center md:text-left mt-[30px] md:w-[65%]'>Hello Joseph,  I’m  happy to have you in my team. While you wait  when your dashboard is
                 being setup  I suggest you check out the <span className='text-[#FFCA14]'>AurGig </span> to explore  some projects you can easily 
                 work on and Earn .</p>
        </section>
    </div>
  )
}

export default Matching